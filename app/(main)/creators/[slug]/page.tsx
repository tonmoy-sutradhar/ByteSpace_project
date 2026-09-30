import { notFound } from "next/navigation";
import Container from "@/app/Components/Common/Container";
import CourseCard from "@/app/Components/Common/CourseCard";
import FilterBar from "@/app/Components/Common/FilterBar";
import CreatorHero from "@/app/Components/Creator/CreatorHero";
import { courses } from "@/app/config/courses";
import { creator } from "@/app/config/creator";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata() {
  return { title: `${creator.name} | ByteSpace` };
}

export default async function CreatorPage({ params }: PageProps) {
  const { slug } = await params;
  if (slug !== creator.slug) notFound();

  return (
    <>
      <CreatorHero />

      <section className="pb-16 pt-10 lg:pb-[61px] lg:pt-[62px]">
        <Container>
          <FilterBar />

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-[41px] lg:gap-y-[40px]">
            {courses.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
