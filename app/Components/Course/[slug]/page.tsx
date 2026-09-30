import { notFound } from "next/navigation";
import Container from "@/app/Components/Common/Container";
import CourseHero from "@/app/Components/Course/CourseHero";
import CourseVideo from "@/app/Components/Course/CourseVideo";
import CourseSidebar from "@/app/Components/Course/CourseSidebar";
import CourseTabs from "@/app/Components/Course/CourseTabs";
import AboutTab from "@/app/Components/Course/AboutTab";
import { courses } from "@/app/config/courses";
import { courseDetail } from "@/app/config/courseDetail";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata() {
  return { title: `${courseDetail.title} | ByteSpace` };
}

export default async function CourseDetailPage({ params }: PageProps) {
  const { slug } = await params;
  if (!courses.some((course) => course.slug === slug)) notFound();

  const tabs = [
    { id: "about", label: "About", content: <AboutTab /> },
    // Porer message e ei duta replace hobe
    { id: "lessons", label: "Lessons", content: <p>Lessons tab</p> },
    { id: "reviews", label: "Reviews", content: <p>Reviews tab</p> },
  ];

  return (
    <>
      <CourseHero />

      {/* Video + sidebar hero er upor 541px overlap kore (957 - 416) */}
      <div className="relative z-10 pb-16 pt-10 lg:-mt-[541px] lg:pb-[66px] lg:pt-0">
        <Container className="grid gap-10 lg:grid-cols-[724px_412px] lg:items-start lg:justify-between">
          <div>
            <CourseVideo />
            <div className="mt-10 lg:mt-[125px]">
              <CourseTabs tabs={tabs} />
            </div>
          </div>

          <CourseSidebar />
        </Container>
      </div>
    </>
  );
}
