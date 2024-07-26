"use client";

import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";
import { Button } from "@/components/reusable";
import Link from "next/link";
import { useState } from "react";

export function UserLoginForm() {
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function onSubmit(event: React.SyntheticEvent) {
    event.preventDefault();
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }

  return (
    <div className="bg-white px-8 py-10 md:py-6 rounded-lg w-full flex flex-col items-center gap-10">
      <h2 className="text-[28px] font-bold text-black-100 text-center capitalize">
        Welcome back to <br />
        the Auction Community
      </h2>
      <div className="flex justify-between 2xl:flex-row flex-col gap-6">
        <Button
          type="button"
          title="Continue with Google"
          icon="/google.png"
          variant="w-full px-4 py-[0.85rem] flex items-center justify-center bg-slate-100 shadow-xl hover:bg-indigo-100 text-slate-600 rounded-full text-[14px] font-semibold"
        />
        <Button
          type="button"
          title="Continue with Facebook"
          icon="/facebook.png"
          variant="w-full px-4 py-[0.85rem] flex items-center justify-center bg-slate-100 shadow-xl hover:bg-indigo-100 text-slate-600 rounded-full text-[14px] font-semibold"
        />
      </div>

      <form onSubmit={onSubmit} className="space-y-8 w-full max-w-[380px]">
        <div>
          <label
            htmlFor="email"
            className="block px-2 text-[12px] font-medium text-gray-500"
          >
            Email or Username
          </label>
          <input
            type="text"
            id="email"
            name="email"
            value={email}
            placeholder="example@email.com"
            onChange={(e) => setEmail(e.target.value)}
            className="p-2 w-full rounded-md text-gray-500 border-b-2 text-[12px]"
          />
        </div>
        <div>
          <label
            htmlFor="password"
            className="block px-2 text-[12px] font-medium text-gray-500"
          >
            Password
          </label>
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              name="password"
              value={password}
              placeholder="password"
              onChange={(e) => setPassword(e.target.value)}
              className="p-2 w-full rounded-md text-gray-500 border-b-2 text-[12px]"
            />
            <span
              className="absolute inset-y-3 right-4 flex items-end cursor-pointer"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <IoEyeOffOutline /> : <IoEyeOutline />}
            </span>
          </div>
        </div>
        <div className="flex items-center sm:flex-row flex-col justify-between gap-4 sm:gap-10">
          <div className="flex items-center">
            <label
              className="relative flex items-center p-3 rounded-full cursor-pointer"
              htmlFor="remember"
            >
              <input
                type="checkbox"
                className="peer relative h-5 w-5 cursor-pointer appearance-none rounded-md border border-slate-300 transition-all before:absolute
              before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full
              before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-slate-300 checked:bg-indigo-100 
              checked:before:bg-slate-300 before:bg-slate-300 hover:before:opacity-10"
                id="remember"
              />
              <span className="absolute text-indigo-600 transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-3.5 w-3.5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  stroke="currentColor"
                  strokeWidth="1"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </span>
            </label>
            <label
              htmlFor="remember"
              className="block text-[11px] text-slate-400"
            >
              Remember me
            </label>
          </div>
          <Button
            type="submit"
            title="Log In"
            variant="w-[120px] py-3 flex items-center justify-center bg-darkBlue-200 text-white uppercase rounded-full text-[14px] font-semibold"
          />
        </div>
      </form>

      <div className="mt-10 text-center">
        <p className="text-[13px] text-gray-600">
          No Account yet?{" "}
          <Link
            href="/auth/register"
            className="text-black-100 font-bold hover:underline hover:text-blue-700"
          >
            SIGN UP
          </Link>
        </p>
      </div>
    </div>
  );
}
