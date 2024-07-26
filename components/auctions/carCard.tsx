"use client";

import { useState } from "react";
import { useAuction } from "@/hooks/auction_context";

import Image from "next/image";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Button, CountdownTimer } from "../reusable";

const CarCard: React.FC<{ id: number }> = ({ id }) => {
  const auctionInformation = useAuction();
  const auctionItem = auctionInformation.find((item) => item.id === id);
  const [favorite, setFavorite] = useState(false);

  if (!auctionItem)
    return (
      <div className="flex justify-center gap-6 w-[310px] cursor-grab max-h-[450px] shadow-3xl shadow-skyBlue-100 rounded-[20px] py-10 px-6">
        <h3 className="text-black-100 font-semibold capitalize text-[16px]">
          Car not found
        </h3>
      </div>
    );
  const {
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
  } = auctionItem;

  return (
    <div className="w-[290px] rounded-2xl overflow-hidden shadow-4xl bg-white px-5 py-6 flex gap-8 flex-col justify-between">
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

      <div className="w-full px-2">
        <Image
          src={imgURL}
          alt={carName}
          width={140}
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
