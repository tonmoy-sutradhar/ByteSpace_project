import Image from "next/image";
import type { Testimonial } from "@/app/config/testimonials";

const TestimonialCard = ({ item }: { item: Testimonial }) => {
  return (
    <article className="flex min-h-[397px] flex-col rounded-[24px] border border-[#E3E3E3] bg-white p-6 lg:px-[26px]">
      <Image
        src={item.avatar}
        alt={item.name}
        className="h-[80px] w-[80px] rounded-full object-cover"
      />

      <h3 className="mt-[30px] text-[18px] font-semibold leading-6 text-[#1A1A1A]">
        {item.name}
      </h3>
      <p className="text-[14px] leading-5 text-[#0038DC]">{item.role}</p>

      <p className="mt-5 text-[16px] leading-[27px] text-[#6B6B6B]">
        {item.quote}
      </p>
    </article>
  );
};

export default TestimonialCard;
