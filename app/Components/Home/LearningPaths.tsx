import Image from "next/image";
import Link from "next/link";
import Container from "@/app/Components/Common/Container";
import SectionHeading from "@/app/Components/Common/SectionHeading";
import { learningPaths } from "@/app/config/learningPaths";

const LearningPaths = () => {
  return (
    <section className="bg-white pb-16 lg:pb-[126px]">
      <Container>
        <SectionHeading
          size="md"
          title="Explore Diverse Learning Paths at Bytespace"
          descriptionClassName="mt-[15px]"
          description="At Bytespace, we believe in empowering individuals through knowledge. Our diverse range of courses spans various fields, ensuring there's something for everyone. Unleash your potential and explore our carefully curated categories."
        />

        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:mt-[69px] lg:grid-cols-6 lg:gap-[40px]">
          {learningPaths.map((path) => (
            <Link
              key={path.label}
              href={`/courses?category=${encodeURIComponent(path.label)}`}
              className="flex h-[163px] flex-col items-center justify-center gap-[14px] rounded-[20px] border border-[#E3E3E3] bg-white text-[16px] text-[#222] transition hover:shadow-[0_8px_24px_rgba(0,0,0,0.08)]"
            >
              <Image src={path.icon} alt="" className="h-[60px] w-[60px]" />
              {path.label}
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default LearningPaths;
