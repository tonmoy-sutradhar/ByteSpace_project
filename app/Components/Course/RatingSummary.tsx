import StarRating from "@/app/Components/Common/StarRating";
import { overallRating, ratingBreakdown } from "@/app/config/courseReviews";

const RatingSummary = () => {
  return (
    <div className="mt-6 flex flex-col gap-6 rounded-[20px] border border-[#E3E3E3] p-6 sm:flex-row sm:items-center lg:px-10 lg:py-[43px]">
      {/* Big lime box */}
      <div className="flex h-[139px] w-full shrink-0 flex-col items-center justify-center rounded-[10px] bg-[#D6FF1F] sm:w-[128px]">
        <span className="text-[14px] leading-5 text-[#1A1A1A]">Ratings</span>
        <span className="font-heading -mt-1 text-[38px] font-semibold leading-[44px] text-[#1A1A1A]">
          {overallRating}
        </span>
      </div>

      {/* Bars */}
      <ul className="flex flex-1 flex-col gap-[10px]">
        {ratingBreakdown.map((row) => (
          <li key={row.stars} className="flex items-center gap-5">
            <div className="h-[7px] min-w-0 flex-1 overflow-hidden rounded-full bg-[#E3E3E3] lg:w-[281px] lg:flex-none">
              <div
                className="h-full rounded-full bg-[#D6FF1F]"
                style={{ width: `${row.fill}%` }}
              />
            </div>
            {/* Design e protita row te 5 ta star dekhano */}
            <StarRating value={5} />
            <span className="w-[37px] text-right text-[16px] leading-5 text-[#555]">
              {row.count}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RatingSummary;
