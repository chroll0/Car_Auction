import React, { Suspense } from "react";
import Loading from "./loading";
import { AuctionProvider } from "@/hooks/auction_context";

const Landing = React.lazy(() => import("./pages/landing/page"));

const Page = () => {
  return (
    <AuctionProvider>
      <Suspense fallback={<Loading />}>
        <Landing />
      </Suspense>
    </AuctionProvider>
  );
};

export default Page;
