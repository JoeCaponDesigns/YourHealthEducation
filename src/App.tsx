import { Routes, Route } from "react-router-dom"
import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/HeroSection"
import { MissionSection } from "@/components/MissionSection"
import { CourseSection } from "@/components/CourseSection"
import { SubscribeFooter } from "@/components/SubscribeFooter"
import { AboutPage } from "@/components/about"
import { CoursesPage } from "@/components/courses"
import { CourseDetailPage } from "@/components/CourseDetailPage"
import { ContactPage } from "@/components/ContactPage"
import {CartPage } from "@/components/CartPage"
import {CheckoutPage } from "@/components/CheckoutPage"

function HomePage() {
  return (
    <>
      <HeroSection />
      <MissionSection />
      <CourseSection />
      <SubscribeFooter />
    </>
  )
}

function App() {
  return (
    <main className="min-h-screen font-sans antialiased">
      <Navigation />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/courses" element={<CoursesPage />} />
         <Route path="/courses/:slug" element={<CourseDetailPage />} />
         <Route path="/ContactPage" element={<ContactPage />} />
         <Route path ="/CartPage" element={<CartPage />} />
         <Route path ="/CheckoutPage" element={<CheckoutPage />} />
      </Routes>
    </main>
  )
}

export default App
