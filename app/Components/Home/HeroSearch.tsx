"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

const HeroSearch = () => {
  const [query, setQuery] = useState("");
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    router.push(`/courses?q=${encodeURIComponent(query.trim())}`);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="mx-auto flex w-full max-w-[579px] items-center gap-[17px]"
    >
      <div className="relative min-w-0 flex-1">
        <svg
          className="absolute left-[22px] top-1/2 -translate-y-1/2 text-[#7C7C7C]"
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          aria-hidden="true"
        >
          <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="2" />
          <path
            d="M20 20l-4-4"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Course, topic, creator"
          className="h-[50px] w-full rounded-full bg-white pl-[55px] pr-5 text-[16px] text-[#222] outline-none placeholder:text-[#8E8E8E]"
        />
      </div>
      <button
        type="submit"
        className="h-[50px] w-[101px] shrink-0 cursor-pointer rounded-full bg-[#D6FF1F] text-[16px] text-[#111] transition hover:brightness-95"
      >
        Search
      </button>
    </form>
  );
};

export default HeroSearch;
