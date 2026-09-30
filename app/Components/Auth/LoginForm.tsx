"use client";

import { useState } from "react";
import InputField from "./InputField";
import SocialButtons from "./SocialButtons";

const LoginForm = () => {
  const [form, setForm] = useState({ email: "", password: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // TODO: API call
    console.log("Login:", form);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <InputField
          id="email"
          name="email"
          type="email"
          label="Email"
          placeholder="designer@example.com"
          value={form.email}
          onChange={handleChange}
          required
        />
        <div className="mt-6">
          <InputField
            id="password"
            name="password"
            type="password"
            label="Password"
            placeholder="********"
            value={form.password}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mt-6 flex justify-end">
          <button
            type="submit"
            className="h-[46px] w-[104px] cursor-pointer rounded-full bg-[#D6FF1F] text-[18px] text-[#111] transition hover:brightness-95"
          >
            Sign In
          </button>
        </div>
      </form>

      {/* or divider */}
      <div className="mr-[14px] mt-[77px] flex items-center gap-3 text-[16px] leading-5 text-[#7C7C7C]">
        <span className="h-px flex-1 bg-[#D8D8D8]" />
        or
        <span className="h-px flex-1 bg-[#D8D8D8]" />
      </div>

      <SocialButtons />
    </>
  );
};

export default LoginForm;
