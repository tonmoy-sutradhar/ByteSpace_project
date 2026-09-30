const pill =
  "flex h-[48px] cursor-pointer items-center gap-2 rounded-full border border-[#D9D9D9] bg-white px-[15px] text-[16px] text-[#222] transition hover:bg-[#F5F5F5]";

const FunnelIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    aria-hidden="true"
  >
    <path
      d="M3 5h18l-7 8v6l-4-2v-4L3 5z"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinejoin="round"
    />
  </svg>
);

const BarsIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
  >
    <rect x="3" y="13" width="4" height="8" rx="1.2" />
    <rect x="10" y="8" width="4" height="13" rx="1.2" />
    <rect x="17" y="3" width="4" height="18" rx="1.2" />
  </svg>
);

const CategoryIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    aria-hidden="true"
  >
    <path d="M12 3l3.5 6h-7L12 3z" strokeLinejoin="round" />
    <rect x="3" y="14" width="7" height="7" rx="1" />
    <circle cx="17.5" cy="17.5" r="3.5" />
  </svg>
);

const SortIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    aria-hidden="true"
  >
    <path d="M3 6h18M3 12h12M3 18h7" />
  </svg>
);

const FilterBar = ({ className = "" }: { className?: string }) => {
  return (
    <div
      className={`flex flex-wrap items-center justify-between gap-4 ${className}`}
    >
      <div className="flex flex-wrap gap-4">
        <button type="button" className={pill}>
          <FunnelIcon />
          Filter
        </button>
        <button type="button" className={pill}>
          <BarsIcon />
          Level
        </button>
        <button type="button" className={pill}>
          <CategoryIcon />
          Category
        </button>
      </div>

      <button type="button" className={pill}>
        <SortIcon />
        Most relevant
      </button>
    </div>
  );
};

export default FilterBar;
