import { getYoutubeId } from "@/app/lib/youtube";

export interface Course {
  id: string;
  slug: string;
  title: string;
  creator: string;
  level: string;
  lessons: number;
  duration: string;
  comments: number;
  rating: number;
  price: number;
  youtubeId: string;
}

const base = {
  creator: "purepearl studio",
  level: "Beginner",
  lessons: 17,
  duration: "2 hours 16 mins",
  comments: 59,
  rating: 4.5,
  price: 25,
};

export const courses: Course[] = [
  {
    ...base,
    id: "1",
    slug: "learn-figma-from-basic",
    title: "Learn Figma from Basic",
    youtubeId: getYoutubeId("https://youtu.be/3TkgS5WIFi4"),
  },
  {
    ...base,
    id: "2",
    slug: "build-digital-asset",
    title: "Build Digital Asset",
    youtubeId: getYoutubeId("https://youtu.be/aqYTRkuEgVs"), // <- course 2 er video link
  },
  {
    ...base,
    id: "3",
    slug: "the-power-of-big-data",
    title: "the Power of Big Data",
    youtubeId: getYoutubeId("https://youtu.be/xgk5N4rCJIw"), // <- course 3 er video link
  },
  {
    ...base,
    id: "4",
    slug: "balancing-productivity",
    title: "Balancing Productivity and Well-being",
    youtubeId: getYoutubeId("https://youtu.be/fVSdYA1AcQM"), // <- course 4 er video link
  },
  {
    ...base,
    id: "5",
    slug: "mastering-money-management",
    title: "Mastering Money Management",
    youtubeId: getYoutubeId("https://youtu.be/n2fgDQy5LOo"), // <- course 5 er video link
  },
  {
    ...base,
    id: "6",
    slug: "from-idea-to-startup-success",
    title: "From Idea to Startup Success",
    youtubeId: getYoutubeId("https://youtu.be/oUmBVbXNQqc"), // <- course 6 er video link
  },
];

// Search page: design e 6 ta card 3 bar repeat hoyeche (18 ta)
export const allCourses: Course[] = Array.from({ length: 18 }, (_, i) => ({
  ...courses[i % courses.length],
  id: String(i + 1),
}));

// import type { StaticImageData } from "next/image";
// import figmaBasic from "@/app/assets/Courses/figma-basic.png";
// import digitalAsset from "@/app/assets/Courses/digital-asset.png";
// import bigData from "@/app/assets/Courses/big-data.png";
// import productivity from "@/app/assets/Courses/productivity.png";
// import money from "@/app/assets/Courses/money.png";
// import startup from "@/app/assets/Courses/startup.png";

// export interface Course {
//   id: string;
//   slug: string;
//   title: string;
//   creator: string;
//   level: string;
//   lessons: number;
//   duration: string;
//   comments: number;
//   rating: number;
//   price: number;
//   image: StaticImageData;
// }

// const base = {
//   creator: "purepearl studio",
//   level: "Beginner",
//   lessons: 17,
//   duration: "2 hours 16 mins",
//   comments: 59,
//   rating: 4.5,
//   price: 25,
// };

// // Title gulor shesh ongsho design e truncated, tai full title andaj
// export const courses: Course[] = [
//   {
//     ...base,
//     id: "1",
//     slug: "learn-figma-from-basic",
//     title: "Learn Figma from Basic",
//     image: figmaBasic,
//   },
//   {
//     ...base,
//     id: "2",
//     slug: "build-digital-asset",
//     title: "Build Digital Asset",
//     image: digitalAsset,
//   },
//   {
//     ...base,
//     id: "3",
//     slug: "the-power-of-big-data",
//     title: "the Power of Big Data",
//     image: bigData,
//   },
//   {
//     ...base,
//     id: "4",
//     slug: "balancing-productivity",
//     title: "Balancing Productivity and Well-being",
//     image: productivity,
//   },
//   {
//     ...base,
//     id: "5",
//     slug: "mastering-money-management",
//     title: "Mastering Money Management",
//     image: money,
//   },
//   {
//     ...base,
//     id: "6",
//     slug: "from-idea-to-startup-success",
//     title: "From Idea to Startup Success",
//     image: startup,
//   },
// ];

// export const allCourses: Course[] = Array.from({ length: 18 }, (_, i) => ({
//   ...courses[i % courses.length],
//   id: String(i + 1),
// }));
