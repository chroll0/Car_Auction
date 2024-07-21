import {
  BidInformation,
  CarInformation,
  Gallery,
} from "@/components/auction_details";

const AuctionDetails = () => {
  return (
    <div className="flex paddingX paddingY gap-8 justify-center">
      <Gallery />
      <CarInformation />
      <BidInformation />
    </div>
  );
};

export default AuctionDetails;
