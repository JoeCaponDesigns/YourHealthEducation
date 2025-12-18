export interface Course {
  slug: string
  title: string
  price: number
  image: string
  description: string
  features: string[]
  longDescription: string
}

export const courses: Course[] = [
  {
    slug: "diet-coach",
    title: "How to be Your Own Diet Coach",
    price: 1000,
    image: "/nutrition-coaching-course-healthy-meal-planning.jpg",
    description: "Fast track your nutrition from Beginner to Master with comprehensive diet coaching education.",
    features: [
      "Fast track your nutrition from Beginner to Master",
      "Confidence to adjust your diet based on your goals",
      "Education on setting up your diet for your mental and physical performance success",
      "Accessible online course available for you 24/7",
    ],
    longDescription:
      "This comprehensive course empowers you to take control of your nutrition journey. Learn evidence-based strategies to optimize your diet for both mental and physical performance. Whether you're a beginner or looking to refine your approach, this course provides the tools and knowledge you need to become your own diet coach.",
  },
]

export function getCourseBySlug(slug: string): Course | undefined {
  return courses.find((course) => course.slug === slug)
}
