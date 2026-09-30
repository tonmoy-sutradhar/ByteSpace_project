import Image from "next/image";
import Link from "next/link";
import shapes from "@/app/assets/Home/creator-cta-shapes.png";

const CreatorCta = () => {
  return (
    <section className="bg-grid relative overflow-hidden text-white">
      {/* All 3D shapes, one layer (desktop) */}
      <Image
        src={shapes}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 hidden h-full w-full object-cover object-center lg:block"
      />

      <div className="relative mx-auto max-w-[1440px] px-5 py-16 text-center lg:h-[490px] lg:py-0 lg:pt-[84px]">
        <h2 className="font-heading text-[30px] font-semibold leading-[1.3] sm:text-[40px] lg:leading-[54px]">
          Unlock Your Potential as a <br className="hidden lg:block" />
          Creator with ByteSpace
        </h2>

        <p className="mx-auto mt-5 max-w-[950px] text-[16px] leading-[27px] lg:mt-10">
          Experience the collaboration of numerous creators and an expanding
          selection of courses. Register now and become a part of a community
          comprising over 10,000 local and international creators. Utilize our
          Course Editor and showcase your expertise by publishing your first
          course on the ByteSpace Course Library.
        </p>

        <Link
          href="/signup"
          className="mt-8 inline-flex h-[46px] w-[153px] items-center justify-center rounded-full bg-[#D6FF1F] text-[16px] text-[#111] transition hover:brightness-95 lg:mt-[43px]"
        >
          Join as Creator
        </Link>
      </div>
    </section>
  );
};

export default CreatorCta;
