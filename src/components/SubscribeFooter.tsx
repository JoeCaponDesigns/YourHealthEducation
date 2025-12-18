"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/Button"
import { Input } from "@/components/ui/input"
import { Mail } from "lucide-react"

export function SubscribeFooter() {
  const [email, setEmail] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Subscribing email:", email)
    setEmail("")
  }

  return (
    <footer className="bg-secondary text-secondary-foreground py-16 md:py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Subscribe for a Free Health Ebook</h2>
            <p className="text-lg text-secondary-foreground/80">
              Get expert health tips and strategies delivered to your inbox
            </p>
          </div>
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4">
            <div className="relative flex-1">
              <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="pl-10 py-6 text-lg bg-background text-foreground"
              />
            </div>
            <Button
              type="submit"
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg cursor-pointer"
            >
              Subscribe
            </Button>
          </form>
        </div>
      </div>
    </footer>
  )
}
