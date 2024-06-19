import { AuctionsList, FilterBar, SearchBar } from "@/components/auctions";

const Auctions = () => {
  return (
    <div className="flex flex-col paddingX paddingY gap-6">
      <SearchBar />
      <div className="flex gap-12">
        <FilterBar />
        <div className="flex flex-wrap gap-10 items-center justify-around">
          <AuctionsList />
          <AuctionsList />
          <AuctionsList />
          <AuctionsList />
          <AuctionsList />
          <AuctionsList />
        </div>
      </div>
    </div>
  );
};

export default Auctions;
