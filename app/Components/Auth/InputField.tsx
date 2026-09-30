import type { InputHTMLAttributes } from "react";

interface InputFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

const InputField = ({ label, id, ...props }: InputFieldProps) => {
  return (
    <div>
      <label
        htmlFor={id}
        className="mb-[6px] block text-[14px] leading-5 text-[#222]"
      >
        {label}
      </label>
      <input
        id={id}
        {...props}
        className="h-[52px] w-full rounded-[12px] border border-[#E4E4E4] bg-[#FCFCFC] px-6 text-[18px] text-[#222] outline-none placeholder:text-[#8E8E8E] focus:border-[#0038DC]"
      />
    </div>
  );
};

export default InputField;
