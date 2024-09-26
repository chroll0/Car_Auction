import {
  BidInformation,
  CarInformation,
  Gallery,
} from "@/components/auction_details";

const AuctionDetails = () => {
  return (
    <div className="flex flex-col paddingX paddingY gap-6 justify-center">
      <div className="flex flex-col gap-1 capitalize text-black-90 font-semibold ">
        <h1 className="text-[24px] leading-[36px]">1986 Porsche 928 S</h1>
        <p className="text-[16px] leading-[24px] ">
          5.0-Liter V8 Power, Pop-Up Headlights, Extensive Modifications
        </p>
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
