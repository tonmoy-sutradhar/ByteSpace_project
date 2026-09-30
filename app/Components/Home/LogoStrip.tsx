import Image from "next/image";
import strip from "../../assets/Home/logos-strip.png";
import Container from "@/app/Components/Common/Container";

const LogoStrip = () => (
  <section className="bg-[#F5F5F5]">
    <Container className="flex h-[100px] items-center justify-center sm:h-[140px] lg:h-[203px]">
      <Image
        src={strip}
        alt="Trusted by leading companies"
        className="h-auto w-full max-w-[1140px]"
      />
    </Container>
  </section>
);

export default LogoStrip;
