"use client";

import axios from "axios";
import Link from "next/link";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { SubmitHandler, useForm } from "react-hook-form";

import { Button } from "@/components/reusable";
import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";
import { handleLoginProps, LoginProfile } from "@/types/authentication";
import { loginSchema } from "./validation-schema";

export function UserLoginForm() {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;
  const router = useRouter();

  const [showPassword, setShowPassword] = useState({ password: false });
  const [isMounted, setIsMounted] = useState(false);

  const [loginProfile, setLoginProfile] = useState<LoginProfile>({
    emailOrPhone: "",
    password: "",
    remember: false,
  });

  const [activeState, setActiveState] = useState({
    emailOrPhone: false,
    password: false,
  });

  useEffect(() => {
    setIsMounted(true);
    if (typeof window !== "undefined") {
      try {
        const savedProfile = localStorage.getItem("loginProfile");
        const savedState = localStorage.getItem("activeState");

        if (savedProfile) setLoginProfile(JSON.parse(savedProfile));
        if (savedState) setActiveState(JSON.parse(savedState));
      } catch (error) {
        console.error("Failed to load from localStorage", error);
      }
    }
  }, []);

  useEffect(() => {
    if (isMounted && typeof window !== "undefined") {
      localStorage.setItem("loginProfile", JSON.stringify(loginProfile));
      localStorage.setItem("activeState", JSON.stringify(activeState));
    }
  }, [loginProfile, activeState, isMounted]);

  const handleFocus = (field: keyof LoginProfile) => {
    setActiveState((prev) => ({
      ...prev,
      [field]: true,
    }));
  };

  const handleBlur = (field: keyof LoginProfile, value: string) => {
    if (value === "") {
      setActiveState((prev) => ({
        ...prev,
        [field]: false,
      }));
    }
  };

  const handleChange: handleLoginProps = (field, value) => {
    setValue(field, value, { shouldValidate: true });
    setLoginProfile((prev) => ({
      ...prev,
      [field]: value.trim(),
    }));
  };

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    defaultValues: {
      emailOrPhone: loginProfile.emailOrPhone || "",
      password: loginProfile.password || "",
      remember: false,
    },
    resolver: yupResolver(loginSchema),
  });

  useEffect(() => {
    Object.keys(loginProfile).forEach((key) => {
      const value = loginProfile[key as keyof LoginProfile];
      if (value !== undefined) {
        setValue(key as keyof LoginProfile, value);
      }
    });
  }, [loginProfile, setValue]);

  // submit function
  const onSubmit: SubmitHandler<LoginProfile> = async (data) => {
    setLoginProfile(data);
    console.log(data);

    try {
      const response = await axios.post(`${apiUrl}/auth/logIn`, {
        login: data.emailOrPhone,
        password: data.password,
      });

      // Handle successful response
      if (response.status === 200) {
        console.log("Server Response:", response.data);
      } else {
        // Handle non-200 responses
        console.log("Unexpected status code:", response.status);
      }

      setTimeout(() => {
        localStorage.clear();
        router.push("/");
      }, 500);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.error("Axios error:", error.response?.data || error.message);
      } else {
        console.error("Unexpected error:", error);
      }
    }
  };
  // Conditional rendering to avoid SSR/client mismatch
  if (!isMounted) return null;

  return (
    <div className="bg-white px-8 py-10 md:py-6 rounded-lg w-full flex flex-col items-center gap-12">
      <h2 className="text-[28px] font-bold text-black-100 text-center capitalize">
        Welcome back to <br />
        the Auction Community
      </h2>

      {/* connections */}
      <div className="flex justify-center gap-6 flex-wrap w-full sm:flex-row flex-col capitalize font-medium text-[13px]">
        <Button
          type="button"
          title="Google"
          icon="/google.png"
          link="https://www.facebook.com/"
          variant="sm:w-[130px] w-full px-4 py-3 flex items-center justify-center bg-slate-100 shadow-xl hover:bg-indigo-200 text-slate-600 rounded-full"
        />
        <Button
          type="button"
          title="Facebook"
          icon="/facebook.png"
          link="https://www.facebook.com/"
          variant="sm:w-[130px] w-full px-4 py-3 flex items-center justify-center bg-slate-100 shadow-xl hover:bg-indigo-200 text-slate-600 rounded-full"
        />
        <Button
          type="button"
          title="Apple"
          icon="/apple.png"
          link="https://appleid.apple.com/"
          variant="sm:w-[130px] w-full px-4 py-3 flex items-center justify-center bg-slate-100 shadow-xl hover:bg-indigo-200 text-slate-600 rounded-full"
        />
      </div>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-8 w-full max-w-[380px] mt-4"
      >
        {/* email / phone input */}
        <div>
          <div className="flex justify-between items-center relative">
            <label
              htmlFor="emailOrPhone"
              className={`px-2 font-semibold text-gray-500 capitalize absolute transition-all duration-200 ${
                activeState.emailOrPhone
                  ? "top-[-15px] text-[11px]"
                  : "top-[8px] text-[13px]"
              }`}
            >
              email <span className="lowercase">or</span> phone
            </label>
            <p
              className={`absolute right-3 flex justify-end text-red-500 px-2 transition-all
            ${
              activeState.emailOrPhone
                ? "top-[-15px] text-[11px]"
                : "top-[8px] text-[11.5px]"
            }`}
            >
              {errors.emailOrPhone?.message}
            </p>
          </div>
          <input
            type="text"
            id="emailOrPhone"
            {...register("emailOrPhone", {
              onChange: (e) => handleChange("emailOrPhone", e.target.value),
            })}
            onFocus={() => handleFocus("emailOrPhone")}
            onBlur={(e) => handleBlur("emailOrPhone", e.target.value)}
            className="p-2 pr-5 w-full rounded-md text-gray-500 border-b-2 border-gray-300 focus:outline-none focus:border-blue-500 text-[12px]"
          />
        </div>

        {/* password input */}
        <div className="relative">
          <div className="flex justify-between items-center relative">
            <label
              htmlFor="password"
              className={`px-2 font-semibold text-gray-500 capitalize absolute transition-all duration-200 ${
                activeState.password
                  ? "top-[-15px] text-[11px]"
                  : "top-[8px] text-[13px]"
              }`}
            >
              password
            </label>
            <p
              className={`absolute right-3 flex justify-end text-red-500 px-2 transition-all
            ${
              activeState.password
                ? "top-[-15px] text-[11px]"
                : "top-[8px] text-[11.5px]"
            }`}
            >
              {errors.password?.message}
            </p>
          </div>
          <input
            type={showPassword.password ? "text" : "password"}
            id="password"
            {...register("password", {
              onChange: (e) => handleChange("password", e.target.value),
            })}
            onFocus={() => handleFocus("password")}
            onBlur={(e) => handleBlur("password", e.target.value)}
            className="p-2 pr-5 w-full rounded-md text-gray-500 border-b-2 border-gray-300 focus:outline-none focus:border-blue-500 text-[12px]"
          />
          <span
            className="absolute inset-y-6 right-0.5 flex items-end cursor-pointer"
            onClick={() =>
              setShowPassword((prevState) => ({
                ...prevState,
                password: !prevState.password,
              }))
            }
          >
            {showPassword.password ? <IoEyeOffOutline /> : <IoEyeOutline />}
          </span>
        </div>

        <div className="flex items-center sm:flex-row flex-col justify-between gap-4 sm:gap-10">
          {/* checkbox input */}
          <div className="flex items-center">
            <label
              className="relative flex items-center p-3 rounded-full cursor-pointer"
              htmlFor="remember"
            >
              <input
                type="checkbox"
                className="peer relative h-4 w-4 cursor-pointer appearance-none rounded-md border border-slate-300 transition-all before:absolute
                before:top-2/4 before:left-2/4 before:block before:h-9 before:w-9 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full
                before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-slate-300 checked:bg-indigo-100 
                checked:before:bg-slate-300 before:bg-slate-300 hover:before:opacity-10"
                id="remember"
                {...register("remember")}
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
              className="text-indigo-400 block text-[11px] cursor-pointer"
            >
              Remember me
            </label>
          </div>

          {/* submit button */}
          <Button
            type="submit"
            title="Log In"
            variant="w-[120px] py-3 flex items-center justify-center bg-darkBlue-200 text-white uppercase rounded-full text-[14px] font-semibold"
            action={handleSubmit(onSubmit)}
          />
        </div>
      </form>

      <div className="mt-6 text-center">
        <p className="text-[13px] text-gray-600">
          No Account yet?
          <Link
            href="/auth/register"
            className="text-black-100 ml-2 font-bold hover:underline hover:text-blue-700"
          >
            SIGN UP
          </Link>
        </p>
      </div>
    </div>
  );
}
