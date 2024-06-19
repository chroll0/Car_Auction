"use client";

import Image from "next/image";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { useState } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";

const AuctionsList = () => {
  const [favorite, setFavorite] = useState(false);

  return (
    <div className="max-w-[280px] h-[410px] rounded-2xl overflow-hidden shadow-4xl bg-white px-4 py-3">
      <div className="flex justify-between items-center py-2">
        <div>
          <h2 className="text-lg font-bold">Lamborghini 2023</h2>
          <p className="text-gray-500 text-sm">1000 km</p>
          <p className="text-gray-500 text-sm">2,334.555 $</p>
        </div>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger>
              <div
                className="cursor-pointer"
                onClick={() => setFavorite(!favorite)}
              >
                {favorite ? (
                  <FaHeart className="text-[20px]" />
                ) : (
                  <FaRegHeart className="text-[20px] transition-all hover:scale-110" />
                )}
              </div>
            </TooltipTrigger>
            <TooltipContent className="relative left-10">
              {!favorite ? <p>Add to Favorite</p> : <p>Remove from Favorite</p>}
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
      <div className="w-full">
        <Image
          src="/lambo.png"
          alt="lambo"
          width={150}
          height={120}
          style={{ width: "auto", height: "auto", cursor: "pointer" }}
        />
      </div>

      <div className="p-4 flex justify-between items-center">
        <div className="flex flex-col justify-center text-lg font-bold">
          <p className="text-gray-700 text-sm mb-2">Bid end in:</p>
          <div className="flex">
            <div className="flex flex-col items-center">
              <span className="text-[16px]">2</span>
              <span className="text-[10px] text-slate-400">Days</span>
            </div>
            :
            <div className="flex flex-col items-center">
              <span className="text-[16px]">34</span>
              <span className="text-[10px] text-slate-400">Hours</span>
            </div>
            :
            <div className="flex flex-col items-center">
              <span className="text-[16px]">43</span>
              <span className="text-[10px] text-slate-400">Minutes</span>
            </div>
          </div>
        </div>
        <div className="flex justify-center mt-4 h-10">
          <button className="border border-darkBlue-200 text-[14px] font-semibold text-darkBlue-200 rounded-xl px-4">
            Bid now
          </button>
        </div>
      </div>
    </div>
  );
};

export default AuctionsList;
