import { FaFacebook, FaGoogle } from "react-icons/fa";

const buttonClass =
  "flex h-[72px] w-[72px] cursor-pointer items-center justify-center rounded-[20px] border border-[#E4E4E4] bg-white text-black transition hover:bg-[#F5F5F5]";

const SocialButtons = () => {
  return (
    <div className="mt-[45px] flex justify-center gap-[17px]">
      <button
        type="button"
        aria-label="Continue with Facebook"
        className={buttonClass}
      >
        <FaFacebook size={34} />
      </button>
      <button
        type="button"
        aria-label="Continue with Google"
        className={buttonClass}
      >
        <FaGoogle size={30} />
      </button>
    </div>
  );
};

export default SocialButtons;
