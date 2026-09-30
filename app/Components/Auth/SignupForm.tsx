"use client";

import { useState } from "react";
import InputField from "./InputField";

const SignupForm = () => {
  const [form, setForm] = useState({ name: "", email: "", password: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // TODO: API call
    console.log("Signup:", form);
  };

  return (
    <form onSubmit={handleSubmit}>
      <InputField
        id="name"
        name="name"
        type="text"
        label="Full Name"
        placeholder="Jamie Davis"
        value={form.name}
        onChange={handleChange}
        required
      />
      <div className="mt-6">
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
      </div>
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
          className="h-[46px] w-[123px] cursor-pointer rounded-full bg-[#D6FF1F] text-[18px] text-[#111] transition hover:brightness-95"
        >
          Continue
        </button>
      </div>
    </form>
  );
};

export default SignupForm;
