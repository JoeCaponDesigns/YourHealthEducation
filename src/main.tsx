import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import { BrowserRouter } from "react-router-dom"
import "./index.css"
import App from "./App"
import { Navigation } from "@/components/navigation"
import { ScrollToTop } from "@/components/ScrollToTop"
import { CartProvider } from "@/lib/cart-context"
import { CartDrawer } from "@/components/cart-drawer"
import { PageWrapper } from "@/components/page-wrapper"

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
    <ScrollToTop />
      <CartProvider>
        <Navigation />
        <PageWrapper>
          <App />
        </PageWrapper>

        <CartDrawer />
      </CartProvider>
    </BrowserRouter>
  </StrictMode>
)
