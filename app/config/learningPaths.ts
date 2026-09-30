import type { StaticImageData } from "next/image";
import design from "@/app/assets/Home/paths/design.png";
import development from "@/app/assets/Home/paths/development.png";
import itSoftware from "@/app/assets/Home/paths/it-software.png";
import business from "@/app/assets/Home/paths/business.png";
import marketing from "@/app/assets/Home/paths/marketing.png";
import photography from "@/app/assets/Home/paths/photography.png";

export interface LearningPath {
  label: string;
  icon: StaticImageData;
}

export const learningPaths: LearningPath[] = [
  { label: "Design", icon: design },
  { label: "Development", icon: development },
  { label: "IT & Software", icon: itSoftware },
  { label: "Business", icon: business },
  { label: "Marketing", icon: marketing },
  { label: "Photography", icon: photography },
];
