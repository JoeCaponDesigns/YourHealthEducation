import { Button } from "@/components/ui/Button"
import { Link } from "react-router-dom"

export function HeroSection() {
  return (
    <section className="relative bg-background py-12 md:py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center">
          <div className="mb-8 md:mb-12">
            <img
              src="home-logo.png"
              alt="Your Health Education"
              width={500}
              height={300}
              className="w-full max-w-md md:max-w-lg"
              loading="eager"
            />
          </div>

          <h1 className="mb-6 text-3xl md:text-5xl lg:text-6xl font-bold text-balance max-w-4xl">
            Empower Your Health Journey
          </h1>

          <p className="mb-8 text-lg md:text-xl text-muted-foreground max-w-2xl text-pretty">
            Comprehensive education on exercise, nutrition, and mental health designed specifically for men who want to
            optimize their well-being
          </p>

          <Link to="/courses">
          <Button size="lg" className="text-lg px-8 py-6 cursor-pointer">
            Start Your Transformation
          </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
