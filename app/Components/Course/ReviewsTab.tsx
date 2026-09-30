import RatingSummary from "./RatingSummary";
import ReviewList from "./ReviewList";
import { reviewTexts } from "@/app/config/courseReviews";

const ReviewsTab = () => {
  return (
    <div>
      <h2 className="text-[22px] font-semibold leading-[30px] text-[#1A1A1A]">
        What Learners Are Saying
      </h2>
      <p className="mt-[22px] text-[16px] leading-[26px] text-[#6B6B6B]">
        {reviewTexts.intro}
      </p>

      <RatingSummary />
      <ReviewList />
    </div>
  );
};

export default ReviewsTab;
