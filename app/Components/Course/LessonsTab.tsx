import {
  learningProgress,
  lessonModules,
  lessonTexts,
} from "@/app/config/courseLessons";

const heading = "text-[22px] font-semibold leading-[30px] text-[#1A1A1A]";
const body = "text-[16px] leading-[26px] text-[#6B6B6B]";

const VideoIcon = () => (
  <svg
    width="34"
    height="34"
    viewBox="0 0 24 24"
    fill="none"
    stroke="#1A1A1A"
    strokeWidth="2.2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <rect x="2.5" y="6.5" width="12.5" height="11" rx="2" />
    <path d="M15 10.5l6-3v9l-6-3" />
  </svg>
);

const LessonsTab = () => {
  return (
    <div>
      <h2 className={heading}>Explore the Modules</h2>
      <p className={`${body} mt-[22px]`}>{lessonTexts.intro}</p>

      <h2 className={`${heading} mt-5`}>Lesson List</h2>
      <ul className="mt-5 flex flex-col gap-5">
        {lessonModules.map((module) => (
          <li key={module.number} className="flex items-center gap-[13px]">
            <span className="flex h-[72px] w-[72px] shrink-0 items-center justify-center rounded-[20px] bg-[#D6FF1F]">
              <VideoIcon />
            </span>
            <div>
              <h3 className="text-[16px] font-medium leading-[26px] text-[#1A1A1A]">
                Module {module.number}: {module.title}
              </h3>
              <p className={body}>{module.description}</p>
            </div>
          </li>
        ))}
      </ul>

      <h2 className={`${heading} mt-5`}>Lesson Content</h2>
      <p className={`${body} mt-[22px]`}>{lessonTexts.content}</p>

      <h2 className={`${heading} mt-5`}>Lesson Progress Tracking</h2>
      <p className={`${body} mt-[22px]`}>{lessonTexts.progress}</p>

      {/* Progress card */}
      <div className="mt-6 rounded-[16px] border border-[#E3E3E3] px-4 pb-[18px] pt-[15px]">
        <p className="text-[14px] leading-5 text-[#1A1A1A]">
          Learning Progress
        </p>
        <p className="font-heading mt-1 text-[40px] font-medium leading-[48px] text-[#1A1A1A]">
          {learningProgress}%
        </p>
        <div
          className="mt-[3px] h-[7px] w-full overflow-hidden rounded-full bg-[#E3E3E3]"
          role="progressbar"
          aria-valuenow={learningProgress}
          aria-valuemin={0}
          aria-valuemax={100}
        >
          <div
            className="h-full rounded-full bg-[#D6FF1F]"
            style={{ width: `${learningProgress}%` }}
          />
        </div>
      </div>
    </div>
  );
};

export default LessonsTab;
