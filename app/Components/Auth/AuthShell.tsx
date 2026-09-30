import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import logo from "@/app/assets/auth/logo.png";
import visual from "@/app/assets/auth/auth-visual.png";

interface AuthShellProps {
  heading: string;
  description: string;
  children: ReactNode;
}

const AuthShell = ({ heading, description, children }: AuthShellProps) => {
  return (
    <main className="bg-grid min-h-screen overflow-x-hidden text-white">
      <div className="relative mx-auto max-w-[1200px] px-5 py-8 lg:h-[1024px] lg:px-0 lg:py-0">
        {/* Logo */}
        <Link
          href="/"
          className="inline-block lg:absolute lg:left-px lg:top-[34px]"
        >
          <Image
            src={logo}
            alt="ByteSpace"
            priority
            className="h-[33px] w-auto"
          />
        </Link>

        {/* Heading + text */}
        <div className="mt-10 lg:absolute lg:left-[2px] lg:top-[117px] lg:mt-0">
          <h2 className="font-[family-name:var(--font-poppins)] text-[20px] font-medium leading-[30px]">
            {heading}
          </h2>
          <p className="mt-[13px] max-w-[480px] text-[18px] leading-[29px]">
            {description}
          </p>
        </div>

        {/* Illustration (desktop only) */}
        <Image
          src={visual}
          alt="ByteSpace courses preview"
          priority
          className="pointer-events-none absolute left-[2px] top-[305px] hidden w-[496px] lg:block"
        />

        {children}
      </div>
    </main>
  );
};

export default AuthShell;
