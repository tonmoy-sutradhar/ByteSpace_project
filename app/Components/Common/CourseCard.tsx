import Image from "next/image";
import Link from "next/link";
import avatars from "@/app/assets/Courses/card-avatars.png";
import type { Course } from "@/app/config/courses";

const StarIcon = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M12 2.5l2.9 6.1 6.6.9-4.8 4.6 1.2 6.6L12 17.5l-5.9 3.2 1.2-6.6L2.5 9.5l6.6-.9L12 2.5z" />
  </svg>
);

const LevelIcon = () => (
  <svg
    width="12"
    height="12"
    viewBox="0 0 12 12"
    fill="currentColor"
    aria-hidden="true"
  >
    <rect x="0" y="7" width="2.5" height="5" rx="1" />
    <rect x="4.75" y="4" width="2.5" height="8" rx="1" />
    <rect x="9.5" y="0" width="2.5" height="12" rx="1" />
  </svg>
);

const Pill = ({ children }: { children: React.ReactNode }) => (
  <span className="whitespace-nowrap rounded-full bg-[#D9D9D9]/75 px-[10px] text-[13px] leading-[27px] text-[#555] backdrop-blur-[2px]">
    {children}
  </span>
);

const CourseCard = ({ course }: { course: Course }) => {
  return (
    <Link
      href={`/courses/${course.slug}`}
      className="block h-[384px] rounded-[24px] border border-[#D9D9D9] bg-white p-[15px] pb-[17px] transition hover:shadow-[0_8px_24px_rgba(0,0,0,0.08)]"
    >
      {/* Image + pills */}
      <div className="relative h-[195px] overflow-hidden rounded-[16px]">
        <Image
          src={course.image}
          alt={course.title}
          fill
          sizes="342px"
          className="object-cover"
        />
        <div className="absolute inset-x-[15px] bottom-[17px] flex gap-[10px]">
          <Pill>{course.lessons} Lessons</Pill>
          <Pill>{course.duration}</Pill>
          <Pill>{course.comments} Comments</Pill>
        </div>
      </div>

      {/* Title + rating */}
      <div className="mt-[19px] flex items-center justify-between gap-3">
        <h3 className="font-heading min-w-0 truncate text-[20px] font-semibold leading-[28px] text-[#1A1A1A]">
          {course.title}
        </h3>
        <span className="flex shrink-0 items-center gap-1 text-[18px] text-[#6B6B6B]">
          {course.rating}
          <span className="text-[#C8C8C8]">
            <StarIcon />
          </span>
        </span>
      </div>

      <p className="text-[12px] leading-4 text-[#6B6B6B]">
        by <span className="text-[#0038DC]">{course.creator}</span>
      </p>

      {/* Level + avatars */}
      <div className="mt-[19px] flex items-center gap-[11px]">
        <span className="flex h-[30px] items-center gap-2 rounded-[10px] bg-[#F3F3F3] px-3 text-[13px] text-[#222]">
          <LevelIcon />
          {course.level}
        </span>
        <Image src={avatars} alt="" className="h-[32px] w-auto" />
      </div>

      {/* Price */}
      <p className="font-heading mt-[13px] text-[22px] font-semibold leading-[30px] text-[#0038DC]">
        ${course.price}
        <span className="ml-px font-sans text-[12px] font-normal text-[#6B6B6B]">
          /lifetime
        </span>
      </p>
    </Link>
  );
};

export default CourseCard;
