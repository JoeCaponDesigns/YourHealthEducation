"use client"

import type React from "react"
import { createContext, useContext, useState, useEffect } from "react"

export interface CartItem {
  slug: string
  title: string
  price: number
  image: string
  quantity: number
}

interface CartContextType {
  items: CartItem[]
  addToCart: (
    item: Omit<CartItem, "quantity">,
    options?: { openDrawer?: boolean }
  ) => void
  removeFromCart: (slug: string) => void
  updateQuantity: (slug: string, quantity: number) => void
  clearCart: () => void
  getItemCount: () => number
  getTotal: () => number
  isDrawerOpen: boolean
  setIsDrawerOpen: (open: boolean) => void
}

const CartContext = createContext<CartContextType | undefined>(undefined)

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([])
  const [mounted, setMounted] = useState(false)
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)

  // Load cart from localStorage on mount
  useEffect(() => {
    setMounted(true)
    const savedCart = localStorage.getItem("cart")
    if (savedCart) {
      setItems(JSON.parse(savedCart))
    }
  }, [])

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    if (mounted) {
      localStorage.setItem("cart", JSON.stringify(items))
    }
  }, [items, mounted])

  const addToCart = (
    item: Omit<CartItem, "quantity">,
    options: { openDrawer?: boolean } = { openDrawer: true }
  ) => {
    setItems((currentItems) => {
      const existingItem = currentItems.find((i) => i.slug === item.slug)

      if (existingItem) {
        return currentItems.map((i) =>
          i.slug === item.slug
            ? { ...i, quantity: i.quantity + 1 }
            : i
        )
      }

      return [...currentItems, { ...item, quantity: 1 }]
    })

    if (options.openDrawer) {
      setIsDrawerOpen(true)

      setTimeout(() => {
        setIsDrawerOpen(false)
      }, 5000)
    }
  }

  const removeFromCart = (slug: string) => {
    setItems((currentItems) =>
      currentItems.filter((item) => item.slug !== slug)
    )
  }

  const updateQuantity = (slug: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(slug)
      return
    }

    setItems((currentItems) =>
      currentItems.map((item) =>
        item.slug === slug ? { ...item, quantity } : item
      )
    )
  }

  const clearCart = () => {
    setItems([])
  }

  const getItemCount = () => {
    return items.reduce((total, item) => total + item.quantity, 0)
  }

  const getTotal = () => {
    return items.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    )
  }

  return (
    <CartContext.Provider
      value={{
        items,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        getItemCount,
        getTotal,
        isDrawerOpen,
        setIsDrawerOpen,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  const context = useContext(CartContext)
  if (!context) {
    throw new Error("useCart must be used within a CartProvider")
  }
  return context
}
