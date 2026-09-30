import Container from "@/app/Components/Common/Container";
import SectionHeading from "@/app/Components/Common/SectionHeading";
import CategoryChips from "@/app/Components/Common/CategoryChips";
import CourseCard from "@/app/Components/Common/CourseCard";
import { courseCategories } from "@/app/config/categories";
import { courses } from "@/app/config/courses";

const DiscoverCourses = () => {
  return (
    <section className="bg-white pb-[70px] pt-12 lg:pt-[72px]">
      <Container>
        <SectionHeading
          title={
            <>
              Discover Your Passion,
              <br className="hidden sm:block" /> Build Your Skills
            </>
          }
          description="At Bytespace Courses, we bring you closer to life-changing knowledge. Explore a variety of courses across different fields, from technology to the arts, and make a difference in your career and life."
        />

        <CategoryChips
          categories={courseCategories}
          className="mx-auto mt-[45px] max-w-[1100px]"
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:mt-[79px] lg:grid-cols-3 lg:gap-[42px]">
          {courses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default DiscoverCourses;
