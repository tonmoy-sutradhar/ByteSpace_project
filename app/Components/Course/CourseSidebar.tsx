import Image from "next/image";
import Link from "next/link";
import { courseDetail as course } from "@/app/config/courseDetail";
import avatar from "@/app/assets/Course/creator-avatar.png";
import iconResources from "@/app/assets/Course/icons/resources.png";
import iconVideo from "@/app/assets/Course/icons/video.png";
import iconCertificate from "@/app/assets/Course/icons/certificate.png";
import iconConsultation from "@/app/assets/Course/icons/consultation.png";

const includes = [
  { label: "Learning Resources", icon: iconResources },
  { label: "Quality Lesson Videos", icon: iconVideo },
  { label: "Certificate of Completion", icon: iconCertificate },
  { label: "Private Consultation", icon: iconConsultation },
];

const CourseSidebar = () => {
  return (
    <aside className="rounded-[24px] border border-[#E3E3E3] bg-white px-6 py-8 shadow-[0_4px_24px_rgba(0,0,0,0.04)] lg:px-[39px] lg:pb-[39px] lg:pt-[36px]">
      <h2 className="text-[22px] font-semibold leading-[30px] text-[#1A1A1A]">
        {course.totalLessons} Lessons ({course.totalHours} hours)
      </h2>

      {/* Preview lessons */}
      <ol className="mt-6 flex flex-col gap-3">
        {course.previewLessons.map((lesson, i) => (
          <li
            key={lesson.title}
            className="flex items-start text-[16px] leading-[19px] text-[#1A1A1A]"
          >
            <span className="w-[33px] shrink-0">
              {String(i + 1).padStart(2, "0")}
            </span>
            <span className="w-[175px] shrink-0">{lesson.title}</span>
            <span className="ml-auto pl-3 text-[#0038DC] lg:ml-[63px] lg:p-0">
              {lesson.duration}
            </span>
          </li>
        ))}
      </ol>

      <p className="mt-3 text-[16px] leading-6 text-[#6B6B6B]">
        {course.moreVideos} more videos
      </p>

      <p className="mt-[27px] text-[16px] leading-[27px] text-[#6B6B6B]">
        {course.pitch}
      </p>

      <p className="font-heading mt-5 text-[34px] font-semibold leading-[44px] text-[#0038DC]">
        ${course.price}
        <span className="ml-px font-sans text-[16px] font-normal text-[#6B6B6B]">
          /lifetime
        </span>
      </p>

      <button
        type="button"
        className="mt-5 h-[46px] w-full cursor-pointer rounded-full bg-[#D6FF1F] text-[18px] text-[#111] transition hover:brightness-95"
      >
        Enroll Now
      </button>

      {/* Includes */}
      <h3 className="mt-[21px] text-[22px] font-semibold leading-[30px] text-[#1A1A1A]">
        This course include
      </h3>
      <ul className="mt-[23px] flex flex-col gap-[14px]">
        {includes.map((item) => (
          <li
            key={item.label}
            className="flex items-center gap-[11px] text-[16px] leading-6 text-[#6B6B6B]"
          >
            <Image src={item.icon} alt="" width={20} height={20} />
            {item.label}
          </li>
        ))}
      </ul>

      <hr className="mt-[23px] border-t border-[#E3E3E3]" />

      {/* Creator */}
      <div className="mt-[25px] flex items-center gap-[13px]">
        <Image
          src={avatar}
          alt={course.creatorCard.name}
          className="h-[52px] w-[52px] rounded-full object-cover"
        />
        <div>
          <p className="text-[18px] font-medium leading-6 text-[#1A1A1A]">
            {course.creatorCard.name}
          </p>
          <p className="text-[16px] leading-6 text-[#6B6B6B]">
            {course.creatorCard.role}
          </p>
        </div>
      </div>

      <p className="mt-6 text-[16px] leading-[27px] text-[#6B6B6B]">
        {course.pitch}
      </p>

      <Link
        href="/creators/purepearl-studio"
        className="mt-[22px] inline-flex h-[36px] items-center rounded-full border border-[#D9D9D9] px-5 text-[15px] text-[#222] transition hover:bg-[#F5F5F5]"
      >
        See Full Profile
      </Link>
    </aside>
  );
};

export default CourseSidebar;
