"use client";

import { navLinks } from "@/constants/static_data";
import { useState } from "react";
import Button from "./button";
import Link from "next/link";

export default function Navbar() {
  const [active, setActive] = useState("");

  return (
    <div className="paddingX paddingY flex justify-between">
      <Link href="/">
        <div className="text-[30px] font-extrabold">logo</div>
      </Link>
      <div className="lg:flex hidden justify-around gap-12 items-center ml-10">
        {navLinks.map((link) => (
          <div className="flex items-center" key={link.id}>
            <h3
              className={`${
                active === link.title ? "text-purple-100" : "text-darkBlue-100"
              } font-semibold text-[18px] hover:text-purple-100 tracking-wide
            cursor-pointer capitalize transition duration-200`}
              onClick={() => setActive(link.title)}
            >
              <Link href={`#${link.id}`}>{link.title}</Link>
            </h3>
          </div>
        ))}
      </div>
      <div className="flex gap-4">
        <Button
          link="/auth/login"
          type="button"
          title="Login"
          variant="w-[110px] rounded-[6px] px-4 py-2 bg-darkBlue-200 text-white hover:text-darkBlue-200 font-semibold  hover:bg-slate-300 shadow-4xl"
        />
        <Button
          link="/auth/register"
          type="button"
          title="Sign up"
          variant="w-[110px] px-4 py-2 gap-3 bg-white text-darkBlue-200 rounded-[6px] capitalize font-semibold hover:bg-slate-300 shadow-4xl"
        />
      </div>
    </div>
  );
}
