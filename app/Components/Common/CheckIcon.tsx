const CheckIcon = ({ size = 20 }: { size?: number }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 20 20"
    fill="none"
    aria-hidden="true"
  >
    <circle cx="10" cy="10" r="10" fill="#0038DC" />
    <path
      d="M5.8 10.4l2.9 2.9 5.5-5.9"
      stroke="#fff"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default CheckIcon;
