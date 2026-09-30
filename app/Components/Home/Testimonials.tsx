import Container from "@/app/Components/Common/Container";
import TestimonialCard from "./TestimonialCard";
import { testimonials } from "@/app/config/testimonials";

const Testimonials = () => {
  return (
    <section className="bg-testimonials py-14 lg:pb-[98px] lg:pt-[83px]">
      <Container>
        <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
          <h2 className="font-heading text-[30px] font-semibold leading-[1.3] text-[#1A1A1A] sm:text-[40px] lg:mt-[26px] lg:max-w-[480px] lg:leading-[54px]">
            Discover What Our Community Is Saying
          </h2>

          <p className="text-[16px] leading-[27px] text-[#6B6B6B] lg:w-[583px]">
            At ByteSpace, our vibrant community of learners and creators is at
            the heart of what we do. Hear directly from those who have
            experienced the transformative journey of learning and creating on
            our platform. These testimonials reflect the diverse perspectives of
            enthusiastic learners and accomplished creators.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:mt-[72px] lg:grid-cols-3 lg:gap-[42px]">
          {testimonials.map((item) => (
            <TestimonialCard key={item.name} item={item} />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Testimonials;
