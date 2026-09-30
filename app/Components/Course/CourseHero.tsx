import Container from "@/app/Components/Common/Container";
import { courseDetail as course } from "@/app/config/courseDetail";
import ShareButton from "./ShareButton";

const Chip = ({
  icon,
  children,
}: {
  icon: React.ReactNode;
  children: React.ReactNode;
}) => (
  <span className="flex h-[40px] items-center gap-3 rounded-full bg-white px-6 text-[16px] text-[#1A1A1A]">
    <span className="text-[#0038DC]">{icon}</span>
    {children}
  </span>
);

const BarsIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 12 12"
    fill="currentColor"
    aria-hidden="true"
  >
    <rect x="0" y="7" width="2.5" height="5" rx="1" />
    <rect x="4.75" y="4" width="2.5" height="8" rx="1" />
    <rect x="9.5" y="0" width="2.5" height="12" rx="1" />
  </svg>
);

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

const UsersIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    aria-hidden="true"
  >
    <circle cx="9" cy="8" r="3.5" />
    <path d="M2.5 20c0-3.6 2.9-6 6.5-6s6.5 2.4 6.5 6" />
    <path d="M16 4.6a3.5 3.5 0 0 1 0 6.8M18 14.4c2.2.6 3.5 2.6 3.5 5.6" />
  </svg>
);

const CourseHero = () => {
  return (
    <section className="bg-grid relative text-white lg:h-[957px]">
      <div className="relative mx-auto max-w-[1440px]">
        <Container className="pb-12 pt-[130px] lg:pb-0 lg:pt-[171px]">
          <h1 className="font-heading text-[28px] font-semibold leading-[1.25] sm:text-[36px] lg:leading-[44px]">
            {course.title}
          </h1>
          <p className="mt-1 text-[18px] font-medium leading-[30px] lg:text-[20px]">
            {course.subtitle}
          </p>
          <p className="mt-[21px] text-[18px] leading-[26px]">
            by <span className="text-[#D6FF1F]">{course.creator}</span>
          </p>

          <div className="mt-[21px] flex flex-wrap gap-4">
            <Chip icon={<BarsIcon />}>{course.level}</Chip>
            <Chip icon={<StarIcon />}>
              {course.rating} ({course.reviewCount} reviews)
            </Chip>
            <Chip icon={<UsersIcon />}>{course.students} Students</Chip>
          </div>
        </Container>

        <div className="px-5 pb-10 lg:absolute lg:right-[36px] lg:top-[172px] lg:p-0">
          <ShareButton />
        </div>
      </div>
    </section>
  );
};

export default CourseHero;
