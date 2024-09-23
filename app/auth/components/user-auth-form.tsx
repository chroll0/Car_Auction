"use client";

import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import axios from "axios";

import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";

import { Button } from "@/components/reusable";
import { registrationSchema } from "./validation-schema";
import { handleChangeProps, UserProfile } from "@/types/authentication";

export function UserAuthForm() {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;
  const router = useRouter();

  const [showPassword, setShowPassword] = useState({
    password: false,
    confirmPassword: false,
  });
  const [isMounted, setIsMounted] = useState(false);

  const [userProfile, setUserProfile] = useState<UserProfile>({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    number: "",
    terms: false,
  });

  const [activeState, setActiveState] = useState({
    firstName: false,
    lastName: false,
    email: false,
    password: false,
    confirmPassword: false,
    number: false,
  });

  useEffect(() => {
    setIsMounted(true);
    if (typeof window !== "undefined") {
      // Load userProfile and activeState from localStorage
      const savedProfile = localStorage.getItem("userProfile");
      const savedState = localStorage.getItem("activeState");

      if (savedProfile) setUserProfile(JSON.parse(savedProfile));
      if (savedState) setActiveState(JSON.parse(savedState));
    }
  }, []);

  useEffect(() => {
    if (isMounted && typeof window !== "undefined") {
      // Save to localStorage only after the component has mounted
      localStorage.setItem("userProfile", JSON.stringify(userProfile));
      localStorage.setItem("activeState", JSON.stringify(activeState));
    }
  }, [userProfile, activeState, isMounted]);

  const handleFocus = (field: keyof UserProfile) => {
    setActiveState((prev) => ({
      ...prev,
      [field]: true,
    }));
  };

  const handleBlur = (field: keyof UserProfile, value: string) => {
    if (value === "") {
      setActiveState((prev) => ({
        ...prev,
        [field]: false,
      }));
    }
  };

  const handleChange: handleChangeProps = (field, value) => {
    setValue(field, value, { shouldValidate: true });
    setUserProfile((prevProfile) => ({
      ...prevProfile,
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
      firstName: userProfile.firstName || "",
      lastName: userProfile.lastName || "",
      email: userProfile.email || "",
      password: userProfile.password || "",
      confirmPassword: userProfile.confirmPassword || "",
      number: userProfile.number || "",
      terms: userProfile.terms || false,
    },
    resolver: yupResolver(registrationSchema),
  });

  useEffect(() => {
    Object.keys(userProfile).forEach((key) => {
      const value = userProfile[key as keyof UserProfile];
      if (value !== undefined) {
        setValue(key as keyof UserProfile, value);
      }
    });
  }, [userProfile, setValue]);

  // submit function
  const onSubmit: SubmitHandler<UserProfile> = async (data) => {
    setUserProfile(data);
    console.log("Submitted Data:", data);
    try {
      const response = await axios.post(`${apiUrl}/auth/signUp`, {
        firstName: data.firstName,
        lastName: data.lastName,
        email: data.email,
        number: data.number,
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
        router.push("/auth/login");
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
    <div className="bg-white px-8 py-10 md:py-6 rounded-lg w-full flex flex-col items-center gap-10">
      <h2 className="text-[28px] font-bold text-black-100 text-center capitalize">
        Welcome to <br />
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
        className="space-y-8 w-full max-w-[380px]"
      >
        {/* firstName input */}
        <div>
          <div className="flex justify-between items-center relative">
            <label
              htmlFor="firstName"
              className={`px-2 font-semibold text-gray-500 capitalize absolute transition-all duration-200 ${
                activeState.firstName
                  ? "top-[-15px] text-[11px]"
                  : "top-[8px] text-[13px]"
              }`}
            >
              first name
            </label>
            <p
              className={`absolute right-3 flex justify-end text-red-500 px-2 transition-all
            ${
              activeState.firstName
                ? "top-[-15px] text-[11px]"
                : "top-[8px] text-[11.5px]"
            }`}
            >
              {errors.firstName?.message}
            </p>
          </div>
          <input
            type="text"
            id="firstName"
            {...register("firstName", {
              onChange: (e) => handleChange("firstName", e.target.value),
            })}
            onFocus={() => handleFocus("firstName")}
            onBlur={(e) => handleBlur("firstName", e.target.value)}
            className="p-2 pr-5 w-full rounded-md text-gray-500 border-b-2 border-gray-300 focus:outline-none focus:border-blue-500 text-[12px]"
          />
        </div>

        {/* lastName input */}
        <div>
          <div className="flex justify-between items-center relative">
            <label
              htmlFor="lastName"
              className={`px-2 font-semibold text-gray-500 capitalize absolute transition-all duration-200 ${
                activeState.lastName
                  ? "top-[-15px] text-[11px]"
                  : "top-[8px] text-[13px]"
              }`}
            >
              last name
            </label>
            <p
              className={`absolute right-3 flex justify-end text-red-500 px-2 transition-all
            ${
              activeState.lastName
                ? "top-[-15px] text-[11px]"
                : "top-[8px] text-[11.5px]"
            }`}
            >
              {errors.lastName?.message}
            </p>
          </div>
          <input
            type="text"
            id="lastName"
            {...register("lastName", {
              onChange: (e) => handleChange("lastName", e.target.value),
            })}
            onFocus={() => handleFocus("lastName")}
            onBlur={(e) => handleBlur("lastName", e.target.value)}
            className="p-2 pr-5 w-full rounded-md text-gray-500 border-b-2 border-gray-300 focus:outline-none focus:border-blue-500 text-[12px]"
          />
        </div>

        {/* email input */}
        <div>
          <div className="flex justify-between items-center relative">
            <label
              htmlFor="email"
              className={`px-2 font-semibold text-gray-500 capitalize absolute transition-all duration-200 ${
                activeState.email
                  ? "top-[-15px] text-[11px]"
                  : "top-[8px] text-[13px]"
              }`}
            >
              email
            </label>
            <p
              className={`absolute right-3 flex justify-end text-red-500 px-2 transition-all
            ${
              activeState.email
                ? "top-[-15px] text-[11px]"
                : "top-[8px] text-[11.5px]"
            }`}
            >
              {errors.email?.message}
            </p>
          </div>
          <input
            type="text"
            id="email"
            {...register("email", {
              onChange: (e) => handleChange("email", e.target.value),
            })}
            onFocus={() => handleFocus("email")}
            onBlur={(e) => handleBlur("email", e.target.value)}
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
              new password
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

        {/* confirm password input */}
        <div className="relative">
          <div className="flex justify-between items-center relative">
            <label
              htmlFor="confirmPassword"
              className={`px-2 font-semibold text-gray-500 capitalize absolute transition-all duration-200 ${
                activeState.confirmPassword
                  ? "top-[-15px] text-[11px]"
                  : "top-[8px] text-[13px]"
              }`}
            >
              confirm password
            </label>
            <p
              className={`absolute right-3 flex justify-end text-red-500 px-2 transition-all
            ${
              activeState.confirmPassword
                ? "top-[-15px] text-[11px]"
                : "top-[8px] text-[11.5px]"
            }`}
            >
              {errors.confirmPassword?.message}
            </p>
          </div>
          <input
            type={showPassword.confirmPassword ? "text" : "password"}
            id="confirmPassword"
            {...register("confirmPassword", {
              onChange: (e) => handleChange("confirmPassword", e.target.value),
            })}
            onFocus={() => handleFocus("confirmPassword")}
            onBlur={(e) => handleBlur("confirmPassword", e.target.value)}
            className="p-2 pr-5 w-full rounded-md text-gray-500 border-b-2 border-gray-300 focus:outline-none focus:border-blue-500 text-[12px]"
          />
          <span
            className="absolute inset-y-6 right-0.5 flex items-end cursor-pointer"
            onClick={() =>
              setShowPassword((prevState) => ({
                ...prevState,
                confirmPassword: !prevState.confirmPassword,
              }))
            }
          >
            {showPassword.confirmPassword ? (
              <IoEyeOffOutline />
            ) : (
              <IoEyeOutline />
            )}
          </span>
        </div>

        {/* phone number input */}
        <div className="relative">
          <div className="flex justify-between items-center">
            <label
              className="block px-2 text-[13px] font-semibold text-gray-500 capitalize"
              htmlFor="lastName"
            >
              mobile number
            </label>
            <p className="flex justify-end text-red-500 px-2 mr-3 transition-all text-[11.5px]">
              {errors.number?.message}
            </p>
          </div>
          <PhoneInput
            country={"ge"}
            value={userProfile.number || ""}
            onChange={(value) => handleChange("number", value)}
            inputStyle={{
              width: "100%",
              border: "none",
              borderBottom: `2px solid ${
                activeState.number ? "#3B82F6" : "#D1D5DB"
              }`,
              fontSize: "12px",
              color: "#6B7280",
              paddingLeft: "45px",
              paddingRight: "20px",
              borderRadius: "0",
              outline: "none", // Remove default focus outline
            }}
            inputProps={{
              onFocus: () =>
                setActiveState((prev) => ({ ...prev, number: true })),
              onBlur: () =>
                setActiveState((prev) => ({ ...prev, number: false })),
            }}
            buttonStyle={{
              border: "none",
              background: "none",
              padding: 0,
            }}
            dropdownStyle={{
              width: "220px",
              height: "200px",
              padding: "10px",
            }}
            containerStyle={{
              display: "flex",
              alignItems: "center",
              width: "100%",
            }}
          />
        </div>

        <div className="flex items-center sm:flex-row flex-col justify-between gap-4 sm:gap-10">
          {/* checkbox input */}
          <div className="flex items-center">
            <label
              className="relative flex items-center p-3 rounded-full cursor-pointer"
              htmlFor="terms"
            >
              <input
                type="checkbox"
                className="peer relative h-4 w-4 cursor-pointer appearance-none rounded-md border border-slate-300 transition-all before:absolute
                before:top-2/4 before:left-2/4 before:block before:h-9 before:w-9 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full
                before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-slate-300 checked:bg-indigo-100 
                checked:before:bg-slate-300 before:bg-slate-300 hover:before:opacity-10"
                id="terms"
                {...register("terms")}
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
              htmlFor="terms"
              className={`${
                errors.terms ? "text-red-500" : "text-indigo-400"
              } block text-[11px] cursor-pointer`}
            >
              I accept the terms & Condition
            </label>
          </div>

          {/* submit button */}
          <Button
            type="submit"
            title="Sign up"
            variant="w-[120px] py-3 flex items-center justify-center bg-darkBlue-200 text-white uppercase rounded-full text-[14px] hover:bg-indigo-500 font-semibold"
            action={handleSubmit(onSubmit)}
          />
        </div>

        <div className="mt-10 text-center">
          <p className="text-[13px] text-gray-600">
            Own an Account?
            <Link
              href="/auth/login"
              className="text-black-100 font-bold hover:underline hover:text-blue-700 ml-2"
            >
              JUMP RIGHT IN
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
}
