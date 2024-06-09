import Link from "next/link";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Button, CarCard } from "../reusable_components";
import { auctionInformation } from "@/constants/data";
import SectionTitle from "../reusable_components/sectionTitle";

const AuctionCard = () => {
  return (
    <>
      <div className="sm:paddingX px-0 pb-8 flex items-center justify-center flex-col">
        <Carousel
          className="w-full flex justify-center items-center"
          orientation="horizontal"
        >
          <CarouselPrevious className="text-[80px] cursor-pointer" />
          <CarouselContent className="-ml-4 px-6">
            {auctionInformation
              .filter((element) => element.current)
              .map((element) => (
                <CarouselItem
                  className="pl-1 basis-auto 3xl:basis-1/4 px-8 py-8 flex justify-center"
                  key={element.lotNumber}
                >
                  <CarCard {...element} />
                </CarouselItem>
              ))}
          </CarouselContent>
          <CarouselNext className="text-[80px] cursor-pointer" />
        </Carousel>
        <div className="flex justify-center flex-col w-full items-center">
          <div className="w-full flex justify-center">
            <Image
              src="/images/threeDot.png"
              alt="threeDot"
              width={40}
              height={40}
              style={{ width: "auto", height: "auto", cursor: "pointer" }}
            />
          </div>
          <Button
            type="button"
            title="See All"
            variant="bg-black-100 text-white mt-2 rounded-[12px] w-[110px] font-semibold px-4 py-2 text-[18px]"
          />
        </div>
      </div>

      <div className="sm:paddingX px-0 pb-8 flex items-center justify-center flex-col">
        <SectionTitle title="Upcoming Auctions"></SectionTitle>
        <Carousel
          className="w-full flex justify-center items-center"
          orientation="horizontal"
        >
          <CarouselPrevious className="text-[80px] cursor-pointer" />
          <CarouselContent className="-ml-4 px-6">
            {auctionInformation
              .filter((element) => !element.current)
              .map((element) => (
                <CarouselItem
                  className="pl-1 basis-auto 3xl:basis-1/4 px-8 py-8 flex justify-center"
                  key={element.lotNumber}
                >
                  <CarCard {...element} />
                </CarouselItem>
              ))}
          </CarouselContent>
          <CarouselNext className="text-[80px] cursor-pointer" />
        </Carousel>
        <div className="flex justify-center flex-col w-full items-center">
          <div className="w-full flex justify-center">
            <Image
              src="/images/threeDot.png"
              alt="threeDot"
              width={40}
              height={40}
              style={{ width: "auto", height: "auto", cursor: "pointer" }}
            />
          </div>
          <Button
            type="button"
            title="See All"
            variant="bg-black-100 text-white mt-2 rounded-[12px] w-[110px] font-semibold px-4 py-2 text-[18px]"
          />
        </div>
      </div>
    </>
  );
};

export default AuctionCard;
