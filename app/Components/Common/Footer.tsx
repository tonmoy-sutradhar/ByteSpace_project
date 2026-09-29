import React from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "@/app/assets/Footer/footer.png";
import { footerColumns, legalLinks } from "@/app/config/footer";
import NewsletterForm from "./NewsletterForm";

const Footer = () => {
  return (
    <footer className="border-t border-[#D9D9D9] bg-white text-[#1A1A1A]">
      <div className="mx-auto max-w-[1200px] px-5 xl:px-0">
        {/* Top */}
        <div className="flex flex-col gap-12 pb-14 pt-[70px] lg:flex-row lg:pb-[130px]">
          {/* Left: logo + newsletter */}
          <div className="lg:w-[620px] lg:shrink-0">
            <Link href="/" className="inline-block">
              <Image
                src={logo}
                alt="ByteSpace"
                className="h-[35px] w-auto"
                priority
              />
            </Link>

            <p className="mt-5 text-[14px] leading-5">
              Stay Up to date with our latest features and releases by joining
              our newsletter.
            </p>

            <div className="mt-[46px]">
              <NewsletterForm />
            </div>

            <p className="mt-[26px] max-w-[480px] text-[12px] leading-[19px]">
              By subscribing, you agree to our Privacy Policy and consent to
              receive updates from our company.
            </p>
          </div>

          {/* Right: link columns */}
          <div className="grid flex-1 grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-3 lg:grid-cols-[207px_207px_1fr] lg:gap-y-0 lg:pt-[50px]">
            {footerColumns.map((column, i) => (
              <ul key={i} className="flex flex-col gap-[18px]">
                {column.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-[14px] leading-5 transition hover:opacity-60"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col items-center justify-between gap-3 border-t border-[#DCDCDC] pb-[35px] pt-6 sm:flex-row">
          <p className="text-[12px] leading-4">
            © 2023 ByteSpace. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            {legalLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-[12px] leading-4 transition hover:opacity-60"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
