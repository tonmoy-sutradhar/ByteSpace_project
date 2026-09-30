"use client";

import { useState } from "react";

interface CategoryChipsProps {
  categories: string[];
  spread?: boolean;
  className?: string;
  onChange?: (category: string) => void;
}

const CategoryChips = ({
  categories,
  spread = false,
  className = "",
  onChange,
}: CategoryChipsProps) => {
  const [active, setActive] = useState(categories[0]);

  const handleClick = (category: string) => {
    setActive(category);
    onChange?.(category);
  };

  const layout = spread
    ? "flex flex-wrap justify-center gap-3 lg:flex-nowrap lg:justify-between"
    : "flex flex-wrap justify-center gap-x-[14px] gap-y-6";

  return (
    <div className={`${layout} ${className}`}>
      {categories.map((category) => {
        const isActive = category === active;
        return (
          <button
            key={category}
            type="button"
            onClick={() => handleClick(category)}
            className={`h-[40px] shrink-0 cursor-pointer whitespace-nowrap rounded-full px-[18px] text-[16px] transition ${
              isActive
                ? "bg-[#D6FF1F] text-[#111]"
                : "bg-[#F3F3F3] text-[#222] hover:bg-[#E9E9E9]"
            }`}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
};

export default CategoryChips;

// "use client";

// import { useState } from "react";

// interface CategoryChipsProps {
//   categories: string[];
//   className?: string;
//   onChange?: (category: string) => void;
// }

// const CategoryChips = ({
//   categories,
//   className = "",
//   onChange,
// }: CategoryChipsProps) => {
//   const [active, setActive] = useState(categories[0]);

//   const handleClick = (category: string) => {
//     setActive(category);
//     onChange?.(category);
//   };

//   return (
//     <div
//       className={`flex flex-wrap justify-center gap-x-[14px] gap-y-6 ${className}`}
//     >
//       {categories.map((category) => {
//         const isActive = category === active;
//         return (
//           <button
//             key={category}
//             type="button"
//             onClick={() => handleClick(category)}
//             className={`h-[40px] cursor-pointer whitespace-nowrap rounded-full px-[18px] text-[16px] transition ${
//               isActive
//                 ? "bg-[#D6FF1F] text-[#111]"
//                 : "bg-[#F3F3F3] text-[#222] hover:bg-[#E9E9E9]"
//             }`}
//           >
//             {category}
//           </button>
//         );
//       })}
//     </div>
//   );
// };

// export default CategoryChips;
