import type { StaticImageData } from "next/image";
import sarah from "@/app/assets/Home/testimonials/sarah.png";
import james from "@/app/assets/Home/testimonials/james.png";
import alex from "@/app/assets/Home/testimonials/alex.png";

export interface Testimonial {
  name: string;
  role: string;
  quote: string;
  avatar: StaticImageData;
}

export const testimonials: Testimonial[] = [
  {
    name: "Sarah M.",
    role: "Enthusiastic Learner",
    quote:
      "\u201CByteSpace has transformed my approach to learning. The diverse range of courses and the quality of content provided by creators have exceeded my expectations. The platform truly fosters a sense of community and lifelong learning.\u201D",
    avatar: sarah,
  },
  {
    name: "James L.",
    role: "Lifelong Learner",
    quote:
      "\u201CI've tried several online learning platforms, and ByteSpace stands out for its vibrant community and the variety of courses available. The easy navigation and engaging content make it a go-to platform for continuous skill development.\u201D",
    avatar: james,
  },
  {
    name: "Alex B.",
    role: "Inspired Creator",
    quote:
      "\u201CAs a creator, ByteSpace has been a game-changer for me. The Course Editor is user-friendly, and the support from the community is incredible. It's fulfilling to see my courses making a positive impact on learners globally.\u201D",
    avatar: alex,
  },
];
