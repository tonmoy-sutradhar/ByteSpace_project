import Container from "@/app/Components/Common/Container";
import CategoryChips from "@/app/Components/Common/CategoryChips";
import CourseCard from "@/app/Components/Common/CourseCard";
import FilterBar from "@/app/Components/Common/FilterBar";
import Pagination from "@/app/Components/Common/Pagination";
import CoursesHero from "@/app/Components/Courses/CoursesHero";
import { searchCategories } from "@/app/config/categories";
import { allCourses } from "@/app/config/courses";

export const metadata = { title: "Courses | ByteSpace" };

// Real API hole eta response theke ashbe
const TOTAL_PAGES = 5;

interface CoursesPageProps {
  searchParams: Promise<{ q?: string; page?: string }>;
}

export default async function CoursesPage({ searchParams }: CoursesPageProps) {
  const { q = "", page = "1" } = await searchParams;

  const current = Math.min(Math.max(Number(page) || 1, 1), TOTAL_PAGES);
  const term = q.trim().toLowerCase();

  const results = term
    ? allCourses.filter(
        (c) =>
          c.title.toLowerCase().includes(term) ||
          c.creator.toLowerCase().includes(term),
      )
    : allCourses;

  const hrefFor = (p: number) => {
    const params = new URLSearchParams();
    if (q) params.set("q", q);
    if (p > 1) params.set("page", String(p));
    const query = params.toString();
    return query ? `/courses?${query}` : "/courses";
  };

  return (
    <>
      <CoursesHero defaultQuery={q} />

      <section className="pb-16 pt-10 lg:pb-[68px] lg:pt-[72px]">
        <Container>
          <FilterBar />

          <CategoryChips
            categories={searchCategories}
            spread
            className="mt-6 lg:mt-[34px]"
          />

          {results.length > 0 ? (
            <>
              <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:mt-[78px] lg:grid-cols-3 lg:gap-[42px]">
                {results.map((course) => (
                  <CourseCard key={course.id} course={course} />
                ))}
              </div>

              <Pagination
                current={current}
                total={TOTAL_PAGES}
                hrefFor={hrefFor}
                className="mt-12 lg:mt-[69px]"
              />
            </>
          ) : (
            <p className="mt-20 text-center text-[18px] text-[#7C7C7C]">
              No courses found for &ldquo;{q}&rdquo;.
            </p>
          )}
        </Container>
      </section>
    </>
  );
}
