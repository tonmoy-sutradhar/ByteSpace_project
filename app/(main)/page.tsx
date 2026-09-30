import Hero from "@/app/Components/Home/Hero";
import LogoStrip from "../Components/Home/LogoStrip";
import DiscoverCourses from "../Components/Home/DiscoverCourses";
import LearningPaths from "../Components/Home/LearningPaths";
import GrowthAndCreate from "../Components/Home/GrowthAndCreate";

export default function Page() {
  return (
    <>
      <Hero />
      <LogoStrip />
      <DiscoverCourses />
      <LearningPaths />
      <GrowthAndCreate />
    </>
  );
}

// // app/(main)/page.tsx
// import React from "react";

// const page = () => {
//   return <div className="p-4 text-7xl text-blue-600">hello</div>;
// };

// export default page;
