"use client";

import Link from "next/link";
import React, { useState } from "react";
import { FOOTER_LINKS } from "@/constants/static_data";
import { Button } from ".";
import { FaFacebookF, FaGithub, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");

  const handleFirstNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFirstName(e.target.value);
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  return (
    <div className="w-full paddingX paddingY mt-4">
      <div className="flex flex-col justify-center items-center rounded-2xl bg-darkBlue-200 py-10 gap-8">
        <h3 className="text-white font-extrabold text-[30px] text-center">
          Subscribe to our newsletter
        </h3>
        <form className="flex flex-col gap-8 justify-around items-end flex-wrap pb-4 px-8 md:flex-row w-full">
          <label className="flex flex-col md:w-[280px] w-full">
            <input
              type="text"
              name="firstName"
              value={firstName}
              onChange={handleFirstNameChange}
              placeholder="First name"
              className="py-2 px-3 h-[45px] rounded-[6px] outline-none bg-purple-10 text-[12px] tracking-wide"
            />
          </label>
          <label className="flex flex-col md:w-[280px] w-full">
            <input
              type="text"
              name="email"
              value={email}
              onChange={handleEmailChange}
              placeholder="Email address"
              className="py-2 px-3 h-[45px] rounded-[6px] outline-none bg-purple-10 text-[12px] tracking-wide"
            />
          </label>
          <div className="md:w-[280px] w-full flex justify-center items-center h-[45px] rounded-[6px] bg-black-100 text-indigo-100 shadow-3xl border px-4 py-2 border-slate-500 hover:bg-slate-200 hover:text-black-100">
            <Button
              type="submit"
              title="Subscribe Now"
              variant="text-[15px] font-semibold"
            />
          </div>
        </form>
      </div>
      <div className="pt-14 px-8">
        <div className="w-full flex md:flex-row flex-col justify-between gap-10">
          <div className="max-w-[300px]">
            <div className="text-[30px] font-extrabold">logo</div>
            <p className="text-gray-500 text-[14px] mt-8">
              Clarity gives you the blocks and components you need to create a
              truly professional website.
            </p>
          </div>

          {FOOTER_LINKS.map((link) => (
            <div className="flex flex-col gap-10" key={link.title}>
              <span className="text-blue-500 text-[14px] font-semibold uppercase">
                {link.title}
              </span>
              <div className="flex flex-col gap-4">
                {link.links.map((tag) => (
                  <span
                    className="text-[14px] text-gray-500 capitalize"
                    key={tag}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-start gap-6 py-6">
          <div className="text-[18px] w-[50px] h-[50px] rounded-full border border-gray-10 hover:bg-blue-600 hover:text-white cursor-pointer flex justify-center items-center">
            <FaXTwitter />
          </div>
          <div className="text-[18px] w-[50px] h-[50px] rounded-full border border-gray-10 hover:bg-blue-600 hover:text-white cursor-pointer flex justify-center items-center">
            <FaFacebookF />
          </div>
          <div className="text-[18px] w-[50px] h-[50px] rounded-full border border-gray-10 hover:bg-blue-600 hover:text-white cursor-pointer flex justify-center items-center">
            <FaInstagram />
          </div>
          <div className="text-[18px] w-[50px] h-[50px] rounded-full border border-gray-10 hover:bg-blue-600 hover:text-white cursor-pointer flex justify-center items-center">
            <FaGithub />
          </div>
        </div>
        <div className="w-full h-[1px] bg-gray-10"></div>
        <div className="w-full flex items-center justify-center py-6">
          <span className="text-[14px] text-gray-400">
            © Copyright 2022, All Rights Reserved by Auction
          </span>
        </div>
      </div>
    </div>
  );
}
