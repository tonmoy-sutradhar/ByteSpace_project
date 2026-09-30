import type { ReactNode } from "react";

interface SectionHeadingProps {
  title: ReactNode;
  description?: string;
  size?: "lg" | "md";
  className?: string;
  descriptionClassName?: string;
}

const sizes = {
  lg: "text-[28px] sm:text-[40px] lg:leading-[52px]",
  md: "text-[24px] sm:text-[32px] lg:leading-[44px]",
};

const SectionHeading = ({
  title,
  description,
  size = "lg",
  className = "",
  descriptionClassName = "mt-5",
}: SectionHeadingProps) => (
  <div className={`text-center ${className}`}>
    <h2
      className={`font-heading font-semibold leading-[1.3] text-[#1A1A1A] ${sizes[size]}`}
    >
      {title}
    </h2>
    {description && (
      <p
        className={`mx-auto max-w-[940px] text-[16px] leading-[27px] text-[#7C7C7C] ${descriptionClassName}`}
      >
        {description}
      </p>
    )}
  </div>
);

export default SectionHeading;

// import type { ReactNode } from "react";

// interface SectionHeadingProps {
//   title: ReactNode;
//   description?: string;
//   className?: string;
//   titleClassName?: string;
// }

// const SectionHeading = ({
//   title,
//   description,
//   className = "",
//   titleClassName = "",
// }: SectionHeadingProps) => (
//   <div className={`text-center ${className}`}>
//     <h2
//       className={`font-heading text-[28px] font-semibold leading-[1.3] text-[#1A1A1A] sm:text-[40px] lg:leading-[52px] ${titleClassName}`}
//     >
//       {title}
//     </h2>
//     {description && (
//       <p className="mx-auto mt-5 max-w-[940px] text-[16px] leading-[27px] text-[#7C7C7C]">
//         {description}
//       </p>
//     )}
//   </div>
// );

// export default SectionHeading;
