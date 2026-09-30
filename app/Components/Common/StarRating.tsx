interface StarRatingProps {
  value?: number;
  max?: number;
  size?: number;
  className?: string;
}

const StarRating = ({
  value = 5,
  max = 5,
  size = 20,
  className = "",
}: StarRatingProps) => {
  return (
    <div
      className={`flex gap-2 ${className}`}
      role="img"
      aria-label={`${value} out of ${max} stars`}
    >
      {Array.from({ length: max }, (_, i) => (
        <svg
          key={i}
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill={i < value ? "#555555" : "#D0D0D0"}
          aria-hidden="true"
        >
          <path d="M12 2.5l2.9 6.1 6.6.9-4.8 4.6 1.2 6.6L12 17.5l-5.9 3.2 1.2-6.6L2.5 9.5l6.6-.9L12 2.5z" />
        </svg>
      ))}
    </div>
  );
};

export default StarRating;
