"use client";

import CarCard from "./carCard";
import { useAuction } from "@/hooks/auction_context";

const AuctionsList = () => {
  const auctionInformation = useAuction();

  return (
    <div className="flex flex-wrap gap-10 items-center justify-around">
      {auctionInformation
        .filter((element) => element.current)
        .map((element) => (
          <CarCard {...element} key={element.lotNumber} />
        ))}
    </div>
  );
};

export default AuctionsList;
