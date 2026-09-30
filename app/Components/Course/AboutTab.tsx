import Image from "next/image";
import CheckIcon from "@/app/Components/Common/CheckIcon";
import { courseDetail as course } from "@/app/config/courseDetail";
import sneak1 from "@/app/assets/Course/sneak-1.png";
import sneak2 from "@/app/assets/Course/sneak-2.png";
import sneak3 from "@/app/assets/Course/sneak-3.png";
import sneak4 from "@/app/assets/Course/sneak-4.png";

const sneakPeek = [sneak1, sneak2, sneak3, sneak4];

const heading = "text-[22px] font-semibold leading-[30px] text-[#1A1A1A]";

const AboutTab = () => {
  return (
    <div>
      <h2 className={heading}>Description</h2>
      <div className="mt-[22px] flex flex-col gap-[26px]">
        {course.description.map((paragraph) => (
          <p
            key={paragraph.slice(0, 24)}
            className="text-[16px] leading-[26px] text-[#6B6B6B]"
          >
            {paragraph}
          </p>
        ))}
      </div>

      <h2 className={`${heading} mt-5`}>Sneak Peak</h2>
      <div className="mt-[21px] grid grid-cols-2 gap-[18px] sm:grid-cols-4">
        {sneakPeek.map((src, i) => (
          <div
            key={i}
            className="relative h-[125px] overflow-hidden rounded-[14px]"
          >
            <Image
              src={src}
              alt={`Course preview ${i + 1}`}
              fill
              sizes="168px"
              className="object-cover"
            />
          </div>
        ))}
      </div>

      <h2 className={`${heading} mt-[21px]`}>Key Points</h2>
      <ul className="mt-[23px] flex flex-col gap-[14px]">
        {course.keyPoints.map((point) => (
          <li
            key={point}
            className="flex items-center gap-[10px] text-[16px] leading-6 text-[#6B6B6B]"
          >
            <CheckIcon />
            {point}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AboutTab;
