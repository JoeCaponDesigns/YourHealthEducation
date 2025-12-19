import { HeroSection } from "@/components/HeroSection"
import { MissionSection } from "@/components/MissionSection"
import { CourseSection } from "@/components/CourseSection"
import { SubscribeFooter } from "@/components/SubscribeFooter"
import { Helmet } from "react-helmet-async"

export default function HomePage() {
  return (


    
    <main className="min-h-screen font-sans antialiased">

 <Helmet>
        <title>Your Health Education | Evidence-Based Health Coaching for Men</title>

        <meta
          name="description"
          content="Evidence-based education on exercise, nutrition, and mental health designed to help men optimize performance and wellbeing."
        />

        <link
          rel="canonical"
          href="https://joeeeeca.github.io/Your-Health-Education/"
        />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Your Health Education | Evidence-Based Health Coaching for Men"
        />
        <meta
          property="og:description"
          content="Evidence-based education on exercise, nutrition, and mental health designed to help men optimize performance and wellbeing."
        />
        <meta
          property="og:image"
          content={`${import.meta.env.BASE_URL}og-image.jpg`}
        />
        <meta
          property="og:url"
          content="https://joeeeeca.github.io/Your-Health-Education/"
        />
      </Helmet>

      <HeroSection />
      <MissionSection />
      <CourseSection />
      <SubscribeFooter />
    </main>
  )
}