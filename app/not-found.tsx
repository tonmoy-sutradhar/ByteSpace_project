import Link from "next/link";
import { Poppins } from "next/font/google";

const poppins = Poppins({ subsets: ["latin"], weight: ["600"] });

export const metadata = {
  title: "404 | ByteSpace",
};

export default function NotFound() {
  return (
    <main
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-[#0038DC] px-5 py-16 text-center text-white"
      style={{
        backgroundImage:
          "linear-gradient(to right, rgba(255,255,255,0.14) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.14) 1px, transparent 1px)",
        backgroundSize: "93px 93px",
        backgroundPosition: "2px 27px",
      }}
    >
      {/* 404 with lime -> transparent gradient */}
      <span
        aria-hidden="true"
        className={`${poppins.className} select-none bg-[linear-gradient(180deg,#D6FF1F_35%,rgba(214,255,31,0)_100%)] bg-clip-text text-[clamp(140px,31vw,350px)] font-semibold leading-[0.8] text-transparent`}
      >
        404
      </span>

      <h1
        className={`${poppins.className} relative -mt-4 text-[clamp(30px,5vw,56px)] font-semibold leading-[1.15] md:-mt-8`}
      >
        The page you are looking <br className="hidden md:block" />
        for doesn&rsquo;t exist
      </h1>

      <p className="mt-6 text-[14px] font-light md:mt-8">
        Try to use a correct url or go back to homepage to start again
      </p>

      <Link
        href="/"
        className="mt-7 inline-flex h-[35px] items-center justify-center rounded-full bg-[#D6FF1F] px-[19px] text-[14px] text-[#111] transition hover:brightness-95 md:mt-9"
      >
        Back to Home
      </Link>
    </main>
  );
}
