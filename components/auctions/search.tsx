"use client";

import Image from "next/image";
import { useState } from "react";

const Search = () => {
  const [model, setModel] = useState("");

  return (
    <div className="flex w-full flex-col gap-4">
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
          value={model}
          onChange={(e) => setModel(e.target.value)}
          placeholder="Search car by name or vin code"
          className="py-2 px-3 pl-14 rounded-[10px] w-full outline-none bg-skyBlue-10 text-[16px] tracking-wide"
        />
      </div>

      <div className="flex gap-3">
        <button className="font-medium text-[14px] bg-skyBlue-10 cursor-pointer transition-all hover:text-blue-10 rounded-[10px] p-2 capitalize">
          Buy now
        </button>
        <button className="font-medium text-[14px] bg-skyBlue-10 cursor-pointer transition-all hover:text-blue-10 rounded-[10px] p-2 capitalize">
          Timed Auctions
        </button>
        <button className="font-medium text-[14px] bg-skyBlue-10 cursor-pointer transition-all hover:text-blue-10 rounded-[10px] p-2 capitalize">
          Auction Today
        </button>
        <button className="font-medium text-[14px] bg-skyBlue-10 cursor-pointer transition-all hover:text-blue-10 rounded-[10px] p-2 capitalize">
          Auction Tomorrow
        </button>
        <button className="font-medium text-[14px] bg-skyBlue-10 cursor-pointer transition-all hover:text-blue-10 rounded-[10px] p-2 capitalize">
          Hybrid Engine
        </button>
        <button className="font-medium text-[14px] bg-skyBlue-10 cursor-pointer transition-all hover:text-blue-10 rounded-[10px] p-2 capitalize">
          Run & Drive
        </button>
        <button className="font-medium text-[14px] bg-skyBlue-10 cursor-pointer transition-all hover:text-blue-10 rounded-[10px] p-2 capitalize">
          Clear Title
        </button>
      </div>
      <div>
        <span className="capitalize text-[24px] font-semibold">69 results</span>
      </div>
    </div>
  );
};

export default Search;
