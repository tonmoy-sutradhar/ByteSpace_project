"use client";

import { useState } from "react";
import ReviewCard from "./ReviewCard";
import { reviews } from "@/app/config/courseReviews";

type Filter = "all" | 1 | 2 | 3 | 4 | 5;

const ratingFilters: Filter[] = [5, 4, 3, 2, 1];

const chipBase =
  "flex h-[44px] cursor-pointer items-center justify-center gap-2 rounded-full text-[16px] transition";

const ReviewList = () => {
  const [active, setActive] = useState<Filter>("all");

  const visible =
    active === "all" ? reviews : reviews.filter((r) => r.rating === active);

  const chipClass = (isActive: boolean) =>
    isActive
      ? "bg-[#D6FF1F] text-[#111]"
      : "bg-[#F3F3F3] text-[#222] hover:bg-[#E9E9E9]";

  return (
    <div>
      <h2 className="mt-[21px] text-[22px] font-semibold leading-[30px] text-[#1A1A1A]">
        Individual Reviews:
      </h2>

      {/* Rating filter chips */}
      <div className="mt-[23px] flex flex-wrap gap-[17px]">
        <button
          type="button"
          onClick={() => setActive("all")}
          className={`${chipBase} min-w-[95px] px-4 ${chipClass(active === "all")}`}
        >
          All rating
        </button>

        {ratingFilters.map((n) => (
          <button
            key={n}
            type="button"
            onClick={() => setActive(n)}
            className={`${chipBase} min-w-[71px] px-[18px] ${chipClass(active === n)}`}
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="#444"
              aria-hidden="true"
            >
              <path d="M12 2.5l2.9 6.1 6.6.9-4.8 4.6 1.2 6.6L12 17.5l-5.9 3.2 1.2-6.6L2.5 9.5l6.6-.9L12 2.5z" />
            </svg>
            {n}
          </button>
        ))}
      </div>

      {/* Cards */}
      {visible.length > 0 ? (
        <div className="mt-7 flex flex-col gap-6">
          {visible.map((review) => (
            <ReviewCard key={review.id} review={review} />
          ))}
        </div>
      ) : (
        <p className="mt-10 text-[16px] text-[#6B6B6B]">
          No reviews with this rating yet.
        </p>
      )}
    </div>
  );
};

export default ReviewList;
