import type { ReactNode } from "react";

interface AuthCardProps {
  eyebrow: string;
  title: string;
  footer: ReactNode;
  footerClassName?: string; // desktop e footer er bottom offset
  children: ReactNode;
}

const AuthCard = ({
  eyebrow,
  title,
  footer,
  footerClassName = "",
  children,
}: AuthCardProps) => {
  return (
    <section className="relative mt-10 rounded-[32px] bg-white px-6 py-10 text-[#222] lg:absolute lg:left-[621px] lg:top-[120px] lg:mt-0 lg:h-[784px] lg:w-[579px] lg:px-[63px] lg:pb-0 lg:pt-[63px]">
      <p className="text-[18px] leading-[26px] text-[#0038DC]">{eyebrow}</p>
      <h1 className="font-[family-name:var(--font-poppins)] text-[48px] font-semibold leading-[54px]">
        {title}
      </h1>

      <div className="mt-[38px]">{children}</div>

      <p
        className={`mt-10 text-center text-[16px] leading-6 text-[#7C7C7C] lg:absolute lg:inset-x-0 lg:mt-0 ${footerClassName}`}
      >
        {footer}
      </p>
    </section>
  );
};

export default AuthCard;
