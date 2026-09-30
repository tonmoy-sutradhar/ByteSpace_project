const CoursesHero = ({ defaultQuery = "" }: { defaultQuery?: string }) => {
  return (
    <section className="bg-grid text-white">
      <div className="mx-auto max-w-[1200px] px-5 pb-12 pt-[130px] text-center lg:h-[359px] lg:px-0 lg:pb-0 lg:pt-[157px]">
        <h1 className="font-heading text-[32px] font-semibold leading-[1.3] sm:text-[40px] lg:leading-[56px]">
          Find Your Next Course
        </h1>

        <form
          action="/courses"
          className="mx-auto mt-6 flex max-w-[623px] items-center gap-[17px] lg:mt-[26px]"
        >
          {/* Search input */}
          <div className="relative min-w-0 flex-1">
            <svg
              className="pointer-events-none absolute left-[22px] top-1/2 -translate-y-1/2 text-[#7C7C7C]"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              aria-hidden="true"
            >
              <circle
                cx="11"
                cy="11"
                r="7"
                stroke="currentColor"
                strokeWidth="2"
              />
              <path
                d="M20 20l-4-4"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
            <input
              type="text"
              name="q"
              defaultValue={defaultQuery}
              placeholder="Search"
              className="h-[52px] w-full rounded-full bg-white pl-[55px] pr-5 text-[16px] text-[#222] outline-none placeholder:text-[#8E8E8E]"
            />
          </div>

          {/* Courses / Creators select */}
          <div className="relative w-[124px] shrink-0 sm:w-[146px]">
            <select
              name="type"
              defaultValue="courses"
              aria-label="Search type"
              className="h-[52px] w-full cursor-pointer appearance-none rounded-full bg-[#D6FF1F] pl-5 pr-10 text-[16px] text-[#111] outline-none"
            >
              <option value="courses">Courses</option>
              <option value="creators">Creators</option>
            </select>
            <svg
              className="pointer-events-none absolute right-[18px] top-1/2 -translate-y-1/2 text-[#111]"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M6 9l6 6 6-6"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </form>
      </div>
    </section>
  );
};

export default CoursesHero;
