"use client";

import { useState } from "react";
import { FaSearch } from "react-icons/fa";

const Search_bar = () => {
  const [isChecked, setIsChecked] = useState(false);
  const [model, setModel] = useState("");

  return (
    <div className="flex justify-between items-center md:gap-12 gap-6 md:flex-row flex-col-reverse">
      <label className="cursor-pointer md:w-1/3 w-full flex justify-center md:justify-between">
        <input
          type="checkbox"
          checked={isChecked}
          onChange={() => setIsChecked(!isChecked)}
          className="peer sr-only"
        />
        <div className="relative flex items-center border border-slate-300 rounded-[8px] h-[55px] w-[290px] lg:w-[330px] text-[13px] lg:text-[15px] font-medium ">
          <div
            className={`absolute top-0 bottom-0 left-0 w-1/2 h-full bg-darkBlue-200 rounded-[6px] transition-transform duration-300 ${
              isChecked ? "translate-x-full" : ""
            }`}
          ></div>

          <div
            className={`relative flex items-center justify-center w-1/2 h-full z-10 text-center px-2 ${
              isChecked ? "text-gray-900" : "text-white"
            }`}
            onClick={() => setIsChecked(true)}
          >
            Current Auction
          </div>
          <div
            className={`relative flex items-center justify-center w-1/2 h-full z-10 text-center px-2 ${
              isChecked ? "text-white" : "text-gray-900"
            }`}
            onClick={() => setIsChecked(false)}
          >
            Upcoming Auction
          </div>
        </div>
      </label>
      <label
        htmlFor="carName"
        className="relative flex flex-col md:w-2/3 w-full max-w-[500px]"
      >
        <span className="absolute top-0 left-3 h-full flex justify-center items-center">
          <FaSearch className="text-[15px]" />
        </span>
        <input
          id="model"
          type="text"
          name="model"
          value={model}
          onChange={(e) => setModel(e.target.value)}
          placeholder="search car by model or vin code"
          className="py-2 px-3 pl-9 rounded-[15px] h-[40px] outline-none border border-slate-300 text-[12px] tracking-wide"
        />
      </label>
    </div>
  );
};

export default Search_bar;
