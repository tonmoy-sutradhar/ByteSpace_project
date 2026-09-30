"use client";

const ShareIcon = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    aria-hidden="true"
  >
    <circle cx="6" cy="12" r="2.6" />
    <circle cx="18" cy="6" r="2.6" />
    <circle cx="18" cy="18" r="2.6" />
    <path d="M8.3 10.8l7.4-3.6M8.3 13.2l7.4 3.6" />
  </svg>
);

const ShareButton = ({ className = "" }: { className?: string }) => {
  const handleShare = async () => {
    const url = window.location.href;
    try {
      if (navigator.share) {
        await navigator.share({ title: document.title, url });
      } else {
        await navigator.clipboard.writeText(url);
      }
    } catch {
      // user cancelled
    }
  };

  return (
    <button
      type="button"
      onClick={handleShare}
      className={`flex h-[40px] w-[121px] cursor-pointer items-center justify-center gap-2 rounded-full bg-[#D6FF1F] text-[16px] text-[#111] transition hover:brightness-95 ${className}`}
    >
      <ShareIcon />
      Share
    </button>
  );
};

export default ShareButton;
