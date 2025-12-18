import { courses } from "@/lib/course-data"
import { CourseCard } from "@/components/course-card"

export function CourseSection() {
  const course = courses[0]

  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Courses Available
          </h2>
        </div>

        <div className="max-w-2xl mx-auto">
          <CourseCard
            slug={course.slug}
            title={course.title}
            price={course.price}
            features={course.features}
          />
        </div>
      </div>
    </section>
  )
}
