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
import Link from "next/link";

const CarCard: React.FC<{ id: number }> = ({ id }) => {
  const auctionInformation = useAuction();
  const auctionItem = auctionInformation.find((item) => item.id === id);
  const [favorite, setFavorite] = useState(false);

  if (!auctionItem)
    return (
      <div className="flex justify-center gap-6 w-[310px] cursor-grab max-h-[450px] shadow-3xl shadow-skyBlue-100 rounded-[10px] py-10 px-6">
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
    auctionDetails,
    transmission,
    fuelType,
    drivetrain,
    doors,
  } = auctionItem;

  return (
    <div className="rounded-[10px] overflow-hidden shadow-3xl bg-skyBlue-10 hover:bg-white transition-all cursor-pointer px-5 py-6 flex gap-8 justify-between">
      <div className="flex justify-between items-start gap-8">
        <div className="max-w-[360px]">
          <Image
            src={imgURL}
            alt={carName}
            width={360}
            height={200}
            style={{ width: "auto", height: "auto" }}
          />
        </div>

        <div className="flex flex-col gap-4">
          <h2 className="text-[20px] font-semibold">{carName}</h2>
          <p className="capitalize">
            bid{" "}
            <span className="text-blue-10 font-semibold">
              ${auctionDetails.startingBid.toLocaleString()}
            </span>
          </p>

          <div className="grid grid-cols-2 gap-x-8 gap-y-4 w-full">
            {Object.entries({
              mileage,
              year,
              fuelType,
              drivetrain,
              transmission,
              doors,
            }).map(([key, value], index) => {
              return (
                <div key={index}>
                  <div className="flex items-center gap-3">
                    <Image
                      src={`/auctions/${key}.png`}
                      alt={key}
                      width={24}
                      height={24}
                    />
                    <span className="text-[16px] leading-[27px] font-normal capitalize">
                      {typeof value === "number"
                        ? value.toLocaleString()
                        : value}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="flex gap-1">
            <Image
              src="/auctions/fullStar.png"
              alt="star"
              width={24}
              height={24}
            />
            <Image
              src="/auctions/fullStar.png"
              alt="star"
              width={24}
              height={24}
            />
            <Image
              src="/auctions/fullStar.png"
              alt="star"
              width={24}
              height={24}
            />
            <Image
              src="/auctions/fullStar.png"
              alt="star"
              width={24}
              height={24}
            />
            <Image
              src="/auctions/emptyStar.png"
              alt="star"
              width={24}
              height={24}
            />
            <p className="ml-3">(12 reviews)</p>
          </div>
        </div>

        <div className="flex flex-col justify-center items-center h-full gap-4 max-w-[40px]">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger>
                <div
                  className="flex justify-center items-center cursor-pointer p-2.5 bg-white rounded-[10px] shadow-3xl shadow-skyBlue-10 transition-all hover:scale-110"
                  onClick={() => setFavorite(!favorite)}
                >
                  {favorite ? (
                    <FaHeart className="text-[20px] text-blue-10" />
                  ) : (
                    <FaRegHeart className="text-[20px] text-blue-10" />
                  )}
                </div>
              </TooltipTrigger>
              <TooltipContent className="relative left-10">
                {!favorite ? (
                  <p>Add to Favorite</p>
                ) : (
                  <p>Remove from Favorite</p>
                )}
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>

          <Link href="/pages/auction_details" className="h-full">
            <button
              type="button"
              className="bg-white px-2.5 h-full rounded-[10px] transition-all hover:scale-105 shadow-3xl shadow-skyBlue-10"
            >
              <Image
                src="/auctions/next.png"
                alt="star"
                width={24}
                height={24}
              />
            </button>
          </Link>
        </div>
      </div>

      {/* <div className="flex justify-between gap-1 flex-col">
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
      </div> */}
    </div>
  );
};

export default CarCard;
