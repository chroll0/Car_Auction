import {
  BidInformation,
  CarInformation,
  Gallery,
} from "@/components/auction_details";

const AuctionDetails = () => {
  return (
    <div className="flex flex-col paddingX paddingY gap-8 justify-center">
      <div className="flex flex-col">
        <h1>1986 Porsche 928 S</h1>
        <p>5.0-Liter V8 Power, Pop-Up Headlights, Extensive Modifications</p>
      </div>
      <Gallery />
      <div className="flex 2xl:flex-row flex-col gap-10 py-4">
        <BidInformation />
        <CarInformation />
      </div>
    </div>
  );
};

export default AuctionDetails;
