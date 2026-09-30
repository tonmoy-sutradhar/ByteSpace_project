import Image from "next/image";
import ring from "@/app/assets/Hero/ring.png";
import cone from "@/app/assets/Hero/cone.png";
import squiggle from "@/app/assets/Hero/squiggle.png";
import bigData from "@/app/assets/Hero/course-big-data.png";
import avatars from "@/app/assets/Hero/avatars.png";

const HeroVisual = () => {
  return (
    // Figma frame er width/height diye aspect ratio thik koro (screenshot ~482x535)
    <div className="relative mx-auto aspect-[482/535] w-full max-w-[482px]">
      {/* 3D shapes: percentage position, tai responsive */}
      <Image
        src={ring}
        alt=""
        className="absolute left-[18%] top-[16%] w-[13%]"
      />
      <Image
        src={cone}
        alt=""
        className="absolute bottom-0 left-[10%] w-[24%]"
      />
      <Image
        src={squiggle}
        alt=""
        className="absolute bottom-[22%] right-[2%] w-[22%]"
      />

      {/* Front card */}
      <div className="absolute left-[28%] top-[8%] w-[70%] rounded-3xl bg-white p-3 shadow-lg">
        <Image src={bigData} alt="Big data course" className="rounded-2xl" />
        <div className="mt-4 flex items-center justify-between">
          <h3 className="text-[20px] font-semibold">the Power of Big Data</h3>
          <span className="text-[14px]">4.5 ★</span>
        </div>
        <p className="text-[11px] text-[#0038DC]">by purepearl studio</p>
        <div className="mt-3 flex items-center gap-3">
          <span className="rounded-lg bg-[#F3F3F3] px-3 py-2 text-[12px]">
            Beginner
          </span>
          <Image src={avatars} alt="" className="h-[26px] w-auto" />
        </div>
        <p className="mt-3 text-[20px] font-bold text-[#0038DC]">
          $25
          <span className="text-[11px] font-normal text-gray-500">
            /lifetime
          </span>
        </p>
      </div>

      {/* Happy Students box */}
      <div className="absolute bottom-[4%] right-[4%] w-[52%] rounded-2xl bg-[#D6FF1F] p-3">
        <p className="text-[13px] font-medium">Happy Students</p>
        <p className="text-[10px]">4.5 (240) ★</p>
        <Image src={avatars} alt="" className="mt-2 h-[30px] w-auto" />
      </div>
    </div>
  );
};

export default HeroVisual;
