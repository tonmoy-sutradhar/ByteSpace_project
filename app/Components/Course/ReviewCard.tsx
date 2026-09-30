import Image from "next/image";
import StarRating from "@/app/Components/Common/StarRating";
import type { Review } from "@/app/config/courseReviews";

const ReviewCard = ({ review }: { review: Review }) => {
  return (
    <article className="rounded-[20px] border border-[#E3E3E3] p-6 sm:px-10 sm:pb-[38px] sm:pt-10">
      <div className="flex items-start justify-between gap-4">
        <div className="flex items-center gap-3">
          <Image
            src={review.avatar}
            alt={review.name}
            className="h-[52px] w-[52px] rounded-full object-cover"
          />
          <div>
            <p className="text-[18px] leading-6 text-[#1A1A1A]">
              {review.name}
            </p>
            <p className="text-[16px] leading-[22px] text-[#6B6B6B]">
              {review.role}
            </p>
          </div>
        </div>
        <span className="mt-[3px] shrink-0 text-[16px] leading-6 text-[#6B6B6B]">
          {review.date}
        </span>
      </div>

      <StarRating value={review.rating} className="mt-[26px]" />

      <p className="mt-[25px] text-[16px] leading-[26px] text-[#6B6B6B]">
        {review.text}
      </p>
    </article>
  );
};

export default ReviewCard;
