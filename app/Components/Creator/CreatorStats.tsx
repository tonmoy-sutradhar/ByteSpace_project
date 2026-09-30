"use client";

import { useState } from "react";

interface CreatorStatsProps {
  products: number;
  followers: number;
}

const pill =
  "flex h-[45px] items-center gap-2 rounded-full bg-white px-6 text-[18px] text-[#1A1A1A]";

const CreatorStats = ({ products, followers }: CreatorStatsProps) => {
  const [following, setFollowing] = useState(false);
  const followerCount = followers + (following ? 1 : 0);

  return (
    <div className="mt-8 flex flex-wrap items-center justify-between gap-4 lg:mt-[40px]">
      <div className="flex flex-wrap gap-4">
        <span className={pill}>
          <span className="text-[#0038DC]">{products}</span>
          Products
        </span>
        <span className={pill}>
          <span className="text-[#0038DC]">{followerCount}</span>
          Followers
        </span>
      </div>

      <button
        type="button"
        aria-pressed={following}
        onClick={() => setFollowing((prev) => !prev)}
        className="h-[46px] min-w-[101px] cursor-pointer rounded-full bg-[#D6FF1F] px-6 text-[18px] text-[#111] transition hover:brightness-95"
      >
        {following ? "Following" : "Follow"}
      </button>
    </div>
  );
};

export default CreatorStats;
