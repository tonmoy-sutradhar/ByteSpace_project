import type { StaticImageData } from "next/image";
import reviewer1 from "@/app/assets/Course/reviewers/reviewer-1.png";
import reviewer2 from "@/app/assets/Course/reviewers/reviewer-2.png";
import reviewer3 from "@/app/assets/Course/reviewers/reviewer-3.png";
import reviewer4 from "@/app/assets/Course/reviewers/reviewer-4.png";

export const reviewTexts = {
  intro:
    "Discover what our learners have to say about their experience with 'Build Digital Assets: A Comprehensive Guide.' Read reviews and ratings from individuals who have embarked on the transformative journey of mastering digital asset creation.",
};

export const overallRating = 4.7;

// fill = bar er fill % (design theke neya, count er proportional na)
export const ratingBreakdown = [
  { stars: 5, count: 720, fill: 92 },
  { stars: 4, count: 120, fill: 36 },
  { stars: 3, count: 21, fill: 9 },
  { stars: 2, count: 12, fill: 3 },
  { stars: 1, count: 16, fill: 5 },
];

export interface Review {
  id: string;
  name: string;
  role: string;
  date: string;
  rating: number;
  text: string;
  avatar: StaticImageData;
}

export const reviews: Review[] = [
  {
    id: "1",
    name: "PurePearl Studio",
    role: "UI/UX Designer",
    date: "a year ago",
    rating: 5,
    text: '"The course provided me with a comprehensive understanding of digital asset creation. The lessons were in-depth, practical, and immediately applicable to my work. Highly recommended!"',
    avatar: reviewer1,
  },
  {
    id: "2",
    name: "Albert Flores",
    role: "UI/UX Designer",
    date: "a year ago",
    rating: 5,
    text: "This course transformed my approach to digital design. The combination of theory, hands-on exercises, and real-world applications made it a truly enriching experience. Excited to implement what I've learned!",
    avatar: reviewer2,
  },
  {
    id: "3",
    name: "Cody Fisher",
    role: "UI/UX Designer",
    date: "a year ago",
    rating: 5,
    text: "The project showcase and critique module created a collaborative environment where I could showcase my work, receive valuable feedback, and refine my skills. It added a unique and valuable dimension to the learning process.",
    avatar: reviewer3,
  },
  {
    id: "4",
    name: "Brooklyn Simmons",
    role: "UI/UX Designer",
    date: "a year ago",
    rating: 5,
    text: "The lessons on optimizing digital assets for various platforms were particularly insightful. The course adapts to the evolving digital landscape, and the engaging content kept me motivated throughout.",
    avatar: reviewer4,
  },
];
