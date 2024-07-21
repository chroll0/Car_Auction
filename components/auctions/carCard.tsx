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
import { Button, CountdownTimer } from "../reusable_components";
import { CarCardProps } from "@/types/carSectionTypes";

const CarCard = ({
  price,
  current,
  carName,
  lotNumber,
  endTime,
  startTime,
  imgURL,
  mileage,
  brand,
  condition,
  year,
}: CarCardProps) => {
  const [favorite, setFavorite] = useState(false);
  return (
    <div className="max-w-[280px] h-[410px] rounded-2xl overflow-hidden shadow-4xl bg-white px-5 py-6 flex gap-4 flex-col justify-between">
      <div className="flex justify-between items-start">
        <div>
          <h2 className="text-lg font-bold">{carName}</h2>
          <p className="text-gray-500 text-sm">{mileage.toLocaleString()} km</p>
          <p className="text-gray-500 text-sm"> {price.toLocaleString()} $</p>
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

      <div className="flex justify-between gap-1 flex-col">
        <span className="font-semibold text-[14px] text-blue-700">
          Lot: <span>{lotNumber}</span>
        </span>
        <div className="flex justify-between items-end gap-4">
          <div className="flex flex-col justify-center text-lg font-bold">
            <p className="text-gray-700 text-sm">Bid end in:</p>
            <div className="text-black-100 text-[15px] font-semibold">
              <CountdownTimer targetDate={endTime} />
            </div>
          </div>
          <Button
            type="button"
            title="Bid now"
            variant="capitalize border border-slate-300 text-darkBlue-200 font-semibold rounded-[6px] min-w-[70px] text-[14px] hover:bg-slate-200 px-3 py-2"
            link="/pages/auction_details"
          />
        </div>
      </div>
    </div>
  );
};

export default CarCard;
