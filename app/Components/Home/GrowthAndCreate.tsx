import Image from "next/image";
import Container from "@/app/Components/Common/Container";
import growthVisual from "@/app/assets/Home/growth-visual.jpg";
import createVisual from "@/app/assets/Home/create-visual.jpg";
import { createBenefits, growthStats } from "@/app/config/home";

const CheckIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    aria-hidden="true"
  >
    <circle cx="10" cy="10" r="10" fill="#0038DC" />
    <path
      d="M5.8 10.4l2.9 2.9 5.5-5.9"
      stroke="#fff"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const GrowthAndCreate = () => {
  return (
    <section className="bg-soft-gradient relative overflow-hidden py-14 lg:py-0">
      <Container className="relative flex flex-col gap-16 lg:block lg:h-[1455px]">
        {/* ---------- Block 1: Growth ---------- */}
        <div className="lg:absolute lg:left-0 lg:top-[189px] lg:w-[480px]">
          <h2 className="font-heading text-[30px] font-semibold leading-[1.3] text-[#1A1A1A] sm:text-[40px] lg:leading-[54px]">
            Your Path to Professional Growth Starts Here!
          </h2>
          <p className="mt-6 max-w-[480px] text-[16px] leading-[29px] text-[#6B6B6B] lg:mt-[39px]">
            Explore our curated selection of courses tailored to enhance your
            capabilities and accelerate your career journey. Whether you are
            looking to sharpen specific skills, gain industry expertise, or
            embark on a new career path entirely, we have the resources you
            need.
          </p>

          <div className="mt-8 flex gap-8 lg:mt-[41px] lg:gap-0">
            {growthStats.map((stat, i) => (
              <div key={stat.label} className={i < 2 ? "lg:w-[125px]" : ""}>
                <p className="font-heading text-[32px] font-semibold leading-[40px] text-[#0038DC]">
                  {stat.value}
                </p>
                <p className="text-[16px] leading-6 text-[#6B6B6B]">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        <Image
          src={growthVisual}
          alt="Student learning with ByteSpace"
          className="mx-auto h-auto w-full max-w-[581px] lg:absolute lg:left-[647px] lg:top-[119px] lg:mx-0 lg:w-[581px] lg:max-w-none"
        />

        {/* ---------- Block 2: Create & Manage ---------- */}
        <Image
          src={createVisual}
          alt="Creator dashboard preview"
          className="mx-auto h-auto w-full max-w-[549px] lg:absolute lg:left-0 lg:top-[787px] lg:mx-0 lg:w-[549px] lg:max-w-none"
        />

        <div className="lg:absolute lg:left-[622px] lg:top-[841px] lg:w-[560px]">
          <h2 className="font-heading text-[30px] font-semibold leading-[1.3] text-[#1A1A1A] sm:text-[40px] lg:leading-[55px]">
            Create &amp; Manage <br className="hidden lg:block" />
            Courses Easily.
          </h2>
          <p className="mt-5 text-[16px] leading-[30px] text-[#6B6B6B] lg:mt-[22px]">
            <span className="font-semibold text-[#1A1A1A]">ByteSpace</span>{" "}
            supports individuals or entities in the creation, publication, and
            administration of educational courses.
          </p>

          <ul className="mt-6 flex flex-col gap-[20px] lg:mt-[30px]">
            {createBenefits.map((item) => (
              <li
                key={item}
                className="flex items-center gap-[10px] text-[16px] leading-5 text-[#222]"
              >
                <CheckIcon />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
};

export default GrowthAndCreate;
