import { AuctionsList, FilterBar, SearchBar } from "@/components/auctions";

const Auctions = () => {
  return (
    <div className="flex flex-col paddingX paddingY gap-6">
      <SearchBar />
      <div className="flex gap-12">
        <FilterBar />
        <AuctionsList />
      </div>
    </div>
  );
};

export default Auctions;
