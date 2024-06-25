import { AuctionsList, FilterBar, SearchBar } from "@/components/auctions";

const Auctions = () => {
  return (
    <div className="flex flex-col paddingX paddingY gap-6">
      <SearchBar />
      <div className="flex md:flex-row flex-col items-center md:items-start gap-12">
        <FilterBar />
        <AuctionsList />
      </div>
    </div>
  );
};

export default Auctions;
