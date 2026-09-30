import Image from "next/image";
import Container from "@/app/Components/Common/Container";
import { creator } from "@/app/config/creator";
import avatar from "@/app/assets/Creator/avatar.png";
import CreatorStats from "./CreatorStats";

const CreatorHero = () => {
  return (
    <section className="bg-grid text-white lg:h-[592px]">
      <Container className="pb-12 pt-[130px] lg:pb-0 lg:pt-[172px]">
        {/* Avatar + name */}
        <div className="flex items-start gap-4 sm:gap-6">
          <Image
            src={avatar}
            alt={creator.name}
            priority
            className="h-[72px] w-[72px] shrink-0 rounded-[18px] object-cover sm:h-[96px] sm:w-[96px] sm:rounded-[24px]"
          />

          <div className="pt-[3px]">
            <div className="flex flex-wrap items-center gap-[9px]">
              <h1 className="font-heading text-[28px] font-medium leading-[36px] sm:text-[40px] sm:leading-[48px]">
                {creator.name}
              </h1>
              <span className="inline-flex h-[34px] items-center rounded-full bg-[#D6FF1F] px-6 text-[16px] text-[#111]">
                Creator
              </span>
            </div>
            <p className="mt-[9px] text-[18px] leading-7">{creator.tagline}</p>
          </div>
        </div>

        {/* Bio */}
        <div className="mt-8 text-[16px] leading-[29px] sm:text-[18px] lg:mt-10">
          {creator.bio.map((paragraph) => (
            <p key={paragraph.slice(0, 20)}>{paragraph}</p>
          ))}
        </div>

        <CreatorStats
          products={creator.products}
          followers={creator.followers}
        />
      </Container>
    </section>
  );
};

export default CreatorHero;
