import { notFound } from "next/navigation";
import Container from "@/app/Components/Common/Container";
import CourseHero from "@/app/Components/Course/CourseHero";
import CourseVideo from "@/app/Components/Course/CourseVideo";
import CourseSidebar from "@/app/Components/Course/CourseSidebar";
import CourseTabs from "@/app/Components/Course/CourseTabs";
import AboutTab from "@/app/Components/Course/AboutTab";
import LessonsTab from "@/app/Components/Course/LessonsTab";
import ReviewsTab from "@/app/Components/Course/ReviewsTab";
import { courses } from "@/app/config/courses";
import { courseDetail } from "@/app/config/courseDetail";

interface PageProps {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ tab?: string }>;
}

const tabIds = ["about", "lessons", "reviews"];

export async function generateMetadata() {
  return { title: `${courseDetail.title} | ByteSpace` };
}

export default async function CourseDetailPage({
  params,
  searchParams,
}: PageProps) {
  const { slug } = await params;
  const { tab } = await searchParams;

  const course = courses.find((c) => c.slug === slug);
  if (!course) notFound();

  const defaultTab = tab && tabIds.includes(tab) ? tab : "about";

  const tabs = [
    { id: "about", label: "About", content: <AboutTab /> },
    { id: "lessons", label: "Lessons", content: <LessonsTab /> },
    { id: "reviews", label: "Reviews", content: <ReviewsTab /> },
  ];

  return (
    <>
      <CourseHero />

      {/* Video + sidebar hero er upor 541px overlap kore (957 - 416) */}
      <div className="relative z-10 pb-16 pt-10 lg:-mt-[541px] lg:pb-[84px] lg:pt-0">
        <Container className="grid gap-10 lg:grid-cols-[724px_412px] lg:items-start lg:justify-between">
          <div>
            <CourseVideo
              videoId={course.youtubeId}
              title={courseDetail.title}
            />
            <div className="mt-10 lg:mt-[125px]">
              <CourseTabs tabs={tabs} defaultTab={defaultTab} />
            </div>
          </div>

          <CourseSidebar />
        </Container>
      </div>
    </>
  );
}

// import { notFound } from "next/navigation";
// import Container from "@/app/Components/Common/Container";
// import CourseHero from "@/app/Components/Course/CourseHero";
// import CourseVideo from "@/app/Components/Course/CourseVideo";
// import CourseSidebar from "@/app/Components/Course/CourseSidebar";
// import CourseTabs from "@/app/Components/Course/CourseTabs";
// import AboutTab from "@/app/Components/Course/AboutTab";
// import LessonsTab from "@/app/Components/Course/LessonsTab";
// import ReviewsTab from "@/app/Components/Course/ReviewsTab";
// import { courses } from "@/app/config/courses";
// import { courseDetail } from "@/app/config/courseDetail";

// interface PageProps {
//   params: Promise<{ slug: string }>;
//   searchParams: Promise<{ tab?: string }>;
// }

// const tabIds = ["about", "lessons", "reviews"];

// export async function generateMetadata() {
//   return { title: `${courseDetail.title} | ByteSpace` };
// }

// export default async function CourseDetailPage({
//   params,
//   searchParams,
// }: PageProps) {
//   const { slug } = await params;
//   const { tab } = await searchParams;

//   if (!courses.some((course) => course.slug === slug)) notFound();

//   const defaultTab = tab && tabIds.includes(tab) ? tab : "about";

//   const tabs = [
//     { id: "about", label: "About", content: <AboutTab /> },
//     { id: "lessons", label: "Lessons", content: <LessonsTab /> },
//     { id: "reviews", label: "Reviews", content: <ReviewsTab /> },
//   ];

//   return (
//     <>
//       <CourseHero />

//       <div className="relative z-10 pb-16 pt-10 lg:-mt-[541px] lg:pb-[84px] lg:pt-0">
//         <Container className="grid gap-10 lg:grid-cols-[724px_412px] lg:items-start lg:justify-between">
//           <div>
//             <CourseVideo />
//             <div className="mt-10 lg:mt-[125px]">
//               <CourseTabs tabs={tabs} defaultTab={defaultTab} />
//             </div>
//           </div>

//           <CourseSidebar />
//         </Container>
//       </div>
//     </>
//   );
// }
