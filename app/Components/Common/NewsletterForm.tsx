// app/Components/Common/NewsletterForm.tsx
"use client";
import React, { useState } from "react";

const NewsletterForm = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Newsletter email:", email);
    setEmail("");
  };

  return (
    <form onSubmit={handleSubmit} className="flex items-center gap-6">
      <input
        type="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter your email"
        className="h-[52px] min-w-0 flex-1 rounded-full border border-[#CFCFCF] bg-white px-6 text-[16px] text-[#1A1A1A] outline-none placeholder:text-[#3D3D3D] focus:border-[#1A1A1A] lg:w-[376px] lg:flex-none"
      />
      <button
        type="submit"
        className="h-[52px] w-[104px] shrink-0 cursor-pointer rounded-full bg-[#D6FF1F] text-[16px] font-medium text-[#1A1A1A] transition hover:brightness-95"
      >
        Search
      </button>
    </form>
  );
};

export default NewsletterForm;
