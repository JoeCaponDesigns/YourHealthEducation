import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/Button"
import { Check } from "lucide-react"
import { Link } from "react-router-dom"

interface CourseCardProps {
  slug: string
  title: string
  price: number
  features: string[]
}

export function CourseCard({ slug, title, price, features }: CourseCardProps) {
  return (
    <Card className="border-2 hover:shadow-xl transition-all hover:-translate-y-1 flex flex-col h-full">
      <CardHeader className="pb-4">
        <h3 className="text-2xl md:text-3xl text-balance">
          {title}
        </h3>

        <p className="text-3xl font-bold text-primary mt-2">
          ${price.toLocaleString()}
        </p>
      </CardHeader>

      <CardContent className="space-y-4 grow">
        {features.map((feature, index) => (
          <div key={index} className="flex items-start gap-3">
            <Check className="h-5 w-5 text-primary mt-1 shrink-0" />
            <p className="text-base md:text-lg leading-relaxed">
              {feature}
            </p>
          </div>
        ))}
      </CardContent>

      <CardFooter>
        <Link to={`/courses/${slug}`} className="w-full">
          <Button size="lg" className="w-full text-lg py-6 cursor-pointer">
            View Course
          </Button>
        </Link>
      </CardFooter>
    </Card>
  )
}
