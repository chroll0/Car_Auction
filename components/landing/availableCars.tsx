import Image from "next/image";
import { motion } from "framer-motion";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import { fadeIn } from "../utils/motion";
import { SectionWrapper } from "../hoc";
import { Button, AuctionCarousel, SectionTitle } from "@/components/reusable";
import { useAuction } from "@/hooks/auction_context";
import { AvailableCarsProps } from "@/types/carSectionTypes";

const AvailableCars: React.FC<AvailableCarsProps> = ({ title, isCurrent }) => {
  const auctionInformation = useAuction();
  return (
    <>
      <SectionTitle preTitle="Available Cars" title={title} />
      <motion.div
        variants={fadeIn({
          direction: "up",
          type: "spring",
          delay: 0.1,
          duration: 0.75,
        })}
      >
        <div className="flex items-center justify-center flex-col">
          <Carousel
            className="w-full flex justify-center items-center"
            orientation="horizontal"
          >
            <CarouselPrevious className="text-[80px] cursor-pointer" />
            <CarouselContent className="-ml-4 px-6">
              {isCurrent
                ? auctionInformation
                    .filter((element) => element.current)
                    .map((element) => (
                      <CarouselItem
                        className="pl-1 basis-auto 3xl:basis-1/4 px-8 py-8 flex justify-center"
                        key={element.lotNumber}
                      >
                        <AuctionCarousel {...element} />
                      </CarouselItem>
                    ))
                : auctionInformation
                    .filter((element) => !element.current)
                    .map((element) => (
                      <CarouselItem
                        className="pl-1 basis-auto 3xl:basis-1/4 px-8 py-8 flex justify-center"
                        key={element.lotNumber}
                      >
                        <AuctionCarousel {...element} />
                      </CarouselItem>
                    ))}
            </CarouselContent>
            <CarouselNext className="text-[80px] cursor-pointer" />
          </Carousel>
          <div className="flex justify-center flex-col w-full items-center">
            <div className="w-full flex justify-center">
              <Image
                src="/landing/icons/threeDot.png"
                alt="threeDot"
                width={40}
                height={40}
                style={{ width: "auto", height: "auto" }}
              />
            </div>
            <Button
              type="button"
              title="See All"
              variant="bg-black-100 text-white mt-2 rounded-[8px] w-[110px] font-semibold px-4 py-2 text-[18px] hover:w-[150px] transition"
              link="/pages/auctions"
            />
          </div>
        </div>
      </motion.div>
    </>
  );
};
export default SectionWrapper(AvailableCars, "");
