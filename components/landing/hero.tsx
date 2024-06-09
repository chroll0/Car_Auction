import Image from "next/image";
import Link from "next/link";
import { Button } from "../reusable_components";

const Hero = () => {
  return (
    <>
      <div className="paddingX paddingY">
        <div className="flex justify-center flex-col md:flex-row items-center gap-8 w-full">
          <div className="flex flex-1/2 flex-col gap-14 ">
            <div className="flex flex-col gap-2">
              <h1 className="xl:min-w-[515px] text-[68px] font-extrabold tracking-[-0.75px] text-darkBlue-100 leading-[1.2] ">
                Find your <br />
                <span className="text-darkBlue-200">Perfect Match</span>
                <br /> At Auction.
              </h1>
              <span className="text-[18px] font-semibold">
                Unlock unbeatable deals on top-quality cars.
              </span>
            </div>
            <div className="w-full flex gap-8">
              <Button
                type="button"
                title="Sell a Car"
                variant="bg-darkBlue-200 font-semibold rounded-[6px] text-white hover:text-darkBlue-200 hover:bg-slate-200 px-4 py-2 w-[160px] shadow-3xl border border-slate-500"
              />
              <Button
                type="button"
                title="Became a Buyer"
                variant="bg-white font-semibold text-darkBlue-200 rounded-[6px] w-[160px] shadow-3xl border border-slate-500 px-4 py-2 hover:bg-slate-200"
              />
            </div>
          </div>
          <div>
            <Image
              src="/images/hero.png"
              alt="auto"
              width={800}
              height={500}
              priority={true}
            />
          </div>
        </div>
      </div>
      {/* <Container className="flex flex-wrap ">
        <ThreeDCardDemo />

        <div className="flex items-center justify-center w-full lg:w-1/2">
          <div className="">
            <Image
              src={heroImg}
              width="616"
              height="617"
              className={"object-cover"}
              alt="Hero Illustration"
              loading="eager"
              placeholder="blur"
            />
          </div>
        </div>
      </Container> */}
    </>
  );
};

export default Hero;
