"use client";

import React, { createContext, useContext } from "react";
import auctionInformation from "@/constants/auction_data.json";
import { InformationProps } from "@/types/carSectionTypes";

const AuctionContext = createContext<InformationProps[]>(auctionInformation);

export const useAuction = () => {
  return useContext(AuctionContext);
};

export const AuctionProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <AuctionContext.Provider value={auctionInformation}>
      {children}
    </AuctionContext.Provider>
  );
};
