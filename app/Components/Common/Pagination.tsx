import Link from "next/link";

interface PaginationProps {
  current: number;
  total: number;
  hrefFor: (page: number) => string;
  className?: string;
}

const circle =
  "flex h-[56px] w-[56px] items-center justify-center rounded-full border border-[#D9D9D9] bg-white text-[#1A1A1A] transition";

const Chevron = ({ dir }: { dir: "left" | "right" }) => (
  <svg
    width="22"
    height="22"
    viewBox="0 0 24 24"
    fill="none"
    aria-hidden="true"
  >
    <path
      d={dir === "left" ? "M15 5l-7 7 7 7" : "M9 5l7 7-7 7"}
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const Pagination = ({
  current,
  total,
  hrefFor,
  className = "",
}: PaginationProps) => {
  const pages = Array.from({ length: total }, (_, i) => i + 1);

  return (
    <nav
      aria-label="Pagination"
      className={`flex items-center justify-center gap-[11px] ${className}`}
    >
      {current > 1 ? (
        <Link
          href={hrefFor(current - 1)}
          aria-label="Previous page"
          className={`${circle} hover:bg-[#F5F5F5]`}
        >
          <Chevron dir="left" />
        </Link>
      ) : (
        <span aria-disabled="true" className={`${circle} opacity-40`}>
          <Chevron dir="left" />
        </span>
      )}

      <div className="flex items-center">
        {pages.map((page) => (
          <Link
            key={page}
            href={hrefFor(page)}
            aria-current={page === current ? "page" : undefined}
            className={`w-9 text-center text-[20px] leading-7 transition hover:text-[#0038DC] ${
              page === current ? "text-[#B5B5B5]" : "text-[#1A1A1A]"
            }`}
          >
            {page}
          </Link>
        ))}
      </div>

      {current < total ? (
        <Link
          href={hrefFor(current + 1)}
          aria-label="Next page"
          className={`${circle} hover:bg-[#F5F5F5]`}
        >
          <Chevron dir="right" />
        </Link>
      ) : (
        <span aria-disabled="true" className={`${circle} opacity-40`}>
          <Chevron dir="right" />
        </span>
      )}
    </nav>
  );
};

export default Pagination;
