"use client";

import { useState } from "react";

import { Tilt } from "react-tilt";
import Image from "next/image";
import Button from "./button";
import { FaHeart, FaRegHeart } from "react-icons/fa";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import CountdownTimer from "./countdownTimer ";
import { useAuction } from "@/hooks/auction_context";

const AuctionCarousel: React.FC<{ id: number }> = ({ id }) => {
  const auctionInformation = useAuction();
  const [favorite, setFavorite] = useState(false);
  const auctionItem = auctionInformation.find((item) => item.id === id);

  if (!auctionItem)
    return (
      <Tilt
        options={{ max: 15, scale: 1.01, speed: 250 }}
        className="flex justify-center gap-6 w-[310px] cursor-grab max-h-[450px] shadow-3xl shadow-skyBlue-100 rounded-[20px] py-10 px-6"
      >
        <h3 className="text-black-100 font-semibold capitalize text-[16px]">
          Car not found
        </h3>
      </Tilt>
    );
  const { imgURL, carName, price, lotNumber, endTime, startTime, current } =
    auctionItem;

  return (
    <Tilt
      options={{ max: 15, scale: 1.01, speed: 250 }}
      className="flex flex-col gap-6 w-[310px] cursor-grab max-h-[450px] shadow-3xl shadow-skyBlue-100 rounded-[20px] py-10 px-6"
    >
      <div className="flex items-center justify-center">
        <Image src={imgURL} alt={carName} width={280} height={200} />
      </div>
      <div className="flex flex-col relative">
        <span className="uppercase text-[24px] font-extrabold">
          {price.toLocaleString()} $
        </span>

        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger>
              {!current && (
                <div
                  className="absolute top-1 right-0 cursor-pointer"
                  onClick={() => setFavorite(!favorite)}
                >
                  {favorite ? (
                    <FaHeart className="text-[20px]" />
                  ) : (
                    <FaRegHeart className="text-[20px] transition-all hover:scale-110" />
                  )}
                </div>
              )}
            </TooltipTrigger>
            <TooltipContent className="relative left-10">
              {!favorite ? <p>Add to Favorite</p> : <p>Remove from Favorite</p>}
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>

        <div className="mt-2">
          <h3 className="text-black-100 font-semibold uppercase tracking-wider text-[16px]">
            {carName}
          </h3>
          <span className="font-semibold text-[14px] text-blue-700">
            Lot: <span>{lotNumber}</span>
          </span>
        </div>
        {current && (
          <div className="flex justify-between items-end gap-4">
            <div className="text-black-100 text-[15px] font-semibold mt-4">
              <CountdownTimer targetDate={endTime} />
            </div>
            <Button
              type="button"
              title="Bid now"
              variant="capitalize bg-skyBlue-100 text-black-100 rounded-[6px] min-w-[70px] text-[12px] hover:bg-slate-200 px-2 py-2 font-bold"
              link="/pages/auction_details"
            />
          </div>
        )}
        {!current && (
          <div className="flex justify-between items-end gap-4">
            <div className="w-[60%] text-black-100 text-[13px] font-semibold mt-4">
              Start at: <span>{startTime}</span>
            </div>
            <Button
              type="button"
              title="Details"
              variant="capitalize bg-skyBlue-100 text-black-100 rounded-[6px] min-w-[70px] text-[12px] hover:bg-slate-200 px-2 py-2 font-bold"
            />
          </div>
        )}
      </div>
    </Tilt>
  );
};

export default AuctionCarousel;
