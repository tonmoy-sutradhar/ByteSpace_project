import Image from "next/image";
import heroVisual from "@/app/assets/Hero/hero-visual.png";
import HeroSearch from "./HeroSearch";

const Hero = () => {
  return (
    <section className="bg-grid relative overflow-hidden text-white lg:aspect-[1440/1022] lg:min-h-[1022px]">
      {/* Text + search (1440px container er bhitore) */}
      <div className="relative z-20 mx-auto max-w-[1440px] px-5 pt-[130px] lg:px-0 lg:pt-[166px]">
        <h1 className="text-center font-[family-name:var(--font-poppins)] text-[40px] font-semibold leading-[1.2] sm:text-[56px] lg:text-[72px] lg:leading-[87px]">
          Get Access to Hundreds <br className="hidden lg:block" />
          Courses Available
        </h1>

        <p className="mx-auto mt-4 max-w-[816px] text-center text-[16px] leading-6 lg:mt-9">
          Unlock your creativity, gain valuable knowledge, and grow your
          business with our wide range of courses.
        </p>

        <div className="mt-8 lg:mt-[63px]">
          <HeroSearch />
        </div>
      </div>

      {/* Visual: container er baire, puro screen width (desktop e), mobile e normal flow */}
      <div className="relative mt-10 h-[380px] lg:pointer-events-none lg:absolute lg:inset-x-0 lg:bottom-0 lg:mt-0 lg:aspect-[2576/1438] lg:h-auto">
        {/* Lime half-circle: image er pichone, % e tai image er sathe scale kore */}
        <div className="absolute bottom-0 left-1/2 h-[160px] w-[320px] -translate-x-1/2 rounded-t-full bg-[#D6FF1F] lg:h-[44%] lg:w-[49.24%]" />

        <Image
          src={heroVisual}
          alt="Smiling student with headset and laptop, with course stats"
          fill
          priority
          sizes="100vw"
          className="object-cover object-bottom"
        />
      </div>
    </section>
  );
};

export default Hero;

// import Image from "next/image";
// import heroVisual from "@/app/assets/Hero/hero-visual.png";
// import HeroSearch from "./HeroSearch";

// const Hero = () => {
//   return (
//     <section className="bg-grid relative overflow-hidden text-white">
//       <div className="relative mx-auto max-w-[1440px] px-5 pt-[130px] lg:h-[1022px] lg:px-0 lg:pt-[166px]">
//         {/* Heading */}
//         <h1 className="text-center font-[family-name:var(--font-poppins)] text-[40px] font-semibold leading-[1.2] sm:text-[56px] lg:text-[72px] lg:leading-[87px]">
//           Get Access to Hundreds <br className="hidden lg:block" />
//           Courses Available
//         </h1>

//         <p className="mx-auto mt-4 max-w-[816px] text-center text-[16px] leading-6 lg:mt-9">
//           Unlock your creativity, gain valuable knowledge, and grow your
//           business with our wide range of courses.
//         </p>

//         <div className="relative z-20 mt-8 lg:mt-[63px]">
//           <HeroSearch />
//         </div>

//         {/* Lime half-circle: image er pichone */}
//         <div className="absolute bottom-0 left-1/2 z-0 h-[160px] w-[320px] -translate-x-1/2 rounded-t-full bg-[#D6FF1F] lg:h-[354px] lg:w-[709px]" />

//         {/* Hero visual: shape + person + floating cards */}
//         <div className="relative z-10 -mx-5 mt-10 h-[380px] lg:absolute lg:inset-x-0 lg:bottom-0 lg:mx-0 lg:mt-0 lg:aspect-[2576/1438] lg:h-auto">
//           <Image
//             src={heroVisual}
//             alt="Smiling student with headset and laptop, with course stats"
//             fill
//             priority
//             sizes="(min-width: 1440px) 1440px, 100vw"
//             className="object-cover object-bottom"
//           />
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Hero;
