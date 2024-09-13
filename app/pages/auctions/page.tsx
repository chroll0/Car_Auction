import { AuctionsList, FilterBar, Search } from "@/components/auctions";

const Auctions = () => {
  return (
    <div className="flex paddingX paddingY gap-6">
      <FilterBar />
      <div className="flex flex-col items-center gap-8">
        <Search />
        <AuctionsList />
      </div>
    </div>
  );
};

export default Auctions;
