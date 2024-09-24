"use client";

import Image from "next/image";
import React, { useState } from "react";

const SideSearch = () => {
  const [startYear, setStartYear] = useState<number>(2016);
  const [endYear, setEndYear] = useState<number>(2024);

  const years = Array.from({ length: 50 }, (_, index) => 1980 + index);
  return (
    <div className="w-full rounded-[20px] overflow-hidden bg-skyBlue-10 px-9 py-7 flex flex-col gap-4 transition-all">
      <h2 className="text-[20px] font-semibold capitalize leading-[30px] pb-3 border-b-[1px] border-blue-10 text-black-90">
        filter
      </h2>

      {/* search bar */}
      <div className="relative flex items-center w-full">
        <label htmlFor="carName"></label>
        <div className="absolute left-3 w-[24px]">
          <Image
            src="/auctions/search.png"
            alt="search"
            width={24}
            height={24}
            style={{ width: "auto", height: "auto" }}
          />
        </div>
        <input
          id="model"
          type="text"
          name="model"
          // value={model}
          // onChange={(e) => setModel(e.target.value)}
          placeholder="Search"
          className="py-2 px-4 pl-14 rounded-[10px] w-full outline-none bg-white text-[16px] tracking-wide"
        />
      </div>

      {/* year filter */}
      <div className="flex flex-col space-y-2 bg-white py-2 px-4 rounded-[10px]">
        <div className="flex justify-between items-center">
          <label className="text-[16px] text-black-90 font-medium capitalize">
            Year
          </label>
          <Image
            src="/auctions/next.png"
            alt="next"
            width={24}
            height={24}
            className="rotate-90"
          />
        </div>

        <div className="flex items-center gap-6 text-black-90 font-normal text-[16px]">
          <div className="bg-skyBlue-10 rounded-[10px] flex justify-between items-center gap-8 relative">
            <select
              value={startYear}
              onChange={(e) => setStartYear(parseInt(e.target.value))}
              className="appearance-none rounded-[10px] cursor-pointer pl-4 pr-14 py-2 leading-[24px] bg-transparent focus:outline-none focus:ring-2 focus:ring-blue-10 focus:border-transparent"
            >
              {years.map((year) => (
                <option key={year} value={year}>
                  {year}
                </option>
              ))}
            </select>
            <div className="absolute right-4 pointer-events-none">
              <Image
                src="/auctions/showMore.png"
                alt="dropdown icon"
                width={24}
                height={24}
              />
            </div>
          </div>

          <span className="text-gray-500">To</span>

          <div className="bg-skyBlue-10 rounded-[10px] flex justify-between items-center gap-8 relative">
            <select
              value={endYear}
              onChange={(e) => setEndYear(parseInt(e.target.value))}
              className="appearance-none rounded-[10px] cursor-pointer pl-4 pr-14 py-2 leading-[24px] bg-transparent focus:outline-none focus:ring-2 focus:ring-blue-10 focus:border-transparent"
            >
              {years.map((year) => (
                <option key={year} value={year}>
                  {year}
                </option>
              ))}
            </select>
            <div className="absolute right-4 pointer-events-none">
              <Image
                src="/auctions/showMore.png"
                alt="dropdown icon"
                width={24}
                height={24}
              />
            </div>
          </div>
        </div>
      </div>

      {/* mark */}
      <div className="flex flex-col space-y-2 bg-white py-2 px-4 rounded-[10px]">
        <div className="flex justify-between items-center">
          <label className="text-[16px] text-black-90 font-medium capitalize">
            mark
          </label>
          <Image
            src="/auctions/next.png"
            alt="next"
            width={24}
            height={24}
            className="rotate-90"
          />
        </div>
      </div>

      <div className="flex flex-col space-y-2 bg-white py-2 px-4 rounded-[10px]">
        <div className="flex justify-between items-center">
          <label className="text-[16px] text-black-90 font-medium capitalize">
            model
          </label>
          <Image
            src="/auctions/next.png"
            alt="next"
            width={24}
            height={24}
            className="rotate-90"
          />
        </div>
      </div>
      <div className="flex flex-col space-y-2 bg-white py-2 px-4 rounded-[10px]">
        <div className="flex justify-between items-center">
          <label className="text-[16px] text-black-90 font-medium capitalize">
            Vehicle Title type
          </label>
          <Image
            src="/auctions/next.png"
            alt="next"
            width={24}
            height={24}
            className="rotate-90"
          />
        </div>
      </div>
      <div className="flex flex-col space-y-2 bg-white py-2 px-4 rounded-[10px]">
        <div className="flex justify-between items-center">
          <label className="text-[16px] text-black-90 font-medium capitalize">
            location
          </label>
          <Image
            src="/auctions/next.png"
            alt="next"
            width={24}
            height={24}
            className="rotate-90"
          />
        </div>
      </div>
    </div>
  );
};

export default SideSearch;
