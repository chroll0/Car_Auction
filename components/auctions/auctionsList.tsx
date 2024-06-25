import { auctionInformation } from "@/constants/data";
import CarCard from "./carCard";

const AuctionsList = () => {
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
