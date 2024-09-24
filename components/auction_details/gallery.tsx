import Image from "next/image";
import React from "react";
import { Button } from "../reusable";

const Gallery = () => {
  return (
    <div className="flex flex-col gap-6 w-full">
      <div className="flex flex-col">
        <h1>1986 Porsche 928 S</h1>
        <p>5.0-Liter V8 Power, Pop-Up Headlights, Extensive Modifications</p>
      </div>
      <div className="w-full">
        <Image
          src="/img/car1.png"
          alt="car"
          width={3000}
          height={2000}
          style={{ width: "auto", height: "auto" }}
        />
        <div className="flex pt-10 gap-8 overflow-x-auto">
          <Image
            src="/img/car1.png"
            alt="car"
            width={200}
            height={200}
            style={{ width: "auto", height: "auto" }}
          />
          <Image
            src="/img/car1.png"
            alt="car"
            width={200}
            height={200}
            style={{ width: "auto", height: "auto" }}
          />
          <Image
            src="/img/car1.png"
            alt="car"
            width={200}
            height={200}
            style={{ width: "auto", height: "auto" }}
          />
          <Image
            src="/img/car1.png"
            alt="car"
            width={200}
            height={200}
            style={{ width: "auto", height: "auto" }}
          />
          <Image
            src="/img/car1.png"
            alt="car"
            width={200}
            height={200}
            style={{ width: "auto", height: "auto" }}
          />
          <Image
            src="/img/car1.png"
            alt="car"
            width={200}
            height={200}
            style={{ width: "auto", height: "auto" }}
          />
          <Image
            src="/img/car1.png"
            alt="car"
            width={200}
            height={200}
            style={{ width: "auto", height: "auto" }}
          />
          <Image
            src="/img/car1.png"
            alt="car"
            width={200}
            height={200}
            style={{ width: "auto", height: "auto" }}
          />
        </div>
      </div>

      <div className="flex gap-8">
        <div className="flex flex-col gap-4 w-full">
          <div className="flex w-full gap-8">
            <div className="rounded-[10px] bg-skyBlue-10 px-4 flex py-3 gap-16">
              <div className="flex gap-4 justify-center items-center">
                <Image
                  src="/auctionLot/time.png"
                  alt="car"
                  width={24}
                  height={24}
                />
                <p className="text-blue-10 text-[20px] font-semibold leading-[30px] capitalize">
                  time left
                </p>
                <p className="text-[20px] font-semibold leading-[30px] capitalize text-black-90">
                  7 <span>Days</span>
                </p>
              </div>

              <div className="flex gap-4 justify-center items-center">
                <Image
                  src="/auctionLot/arrow.png"
                  alt="car"
                  width={24}
                  height={24}
                />
                <p className="text-blue-10 text-[20px] font-semibold leading-[30px] capitalize">
                  high bid
                </p>
                <p className="text-[20px] font-semibold leading-[30px] capitalize text-black-90">
                  $ <span>2,500</span>
                </p>
              </div>

              <div className="flex gap-4 justify-center items-center">
                <Image
                  src="/auctionLot/number.png"
                  alt="car"
                  width={24}
                  height={24}
                />
                <p className="text-blue-10 text-[20px] font-semibold leading-[30px] capitalize">
                  bids
                </p>
                <p className="text-[20px] font-semibold leading-[30px] capitalize text-black-90">
                  <span>5</span>
                </p>
              </div>
            </div>
            <Button
              type="button"
              title="place bid"
              variant="capitalize text-[20px] font-semibold bg-blue-10 px-4 py-3 text-white rounded-[10px]"
            />
          </div>

          <div className="flex flex-col">
            <h2>Description</h2>
            <p className="max-w-[700px]">
              I love the Porsche 928, as it boasts futuristic styling, excellent
              performance, and a big V8. This particular example is a desirable
              1986.5 928 S, which means it gets the upgraded brakes and
              suspension of the later S4 model. It's also fitted with numerous
              modifications intended to enhance its performance and style –
              including 18-inch Turbo Twist wheels, 928 S4 GT front mufflers,
              Bosch fuel injectors, a Porken timing belt tensioner, BOGE front
              shocks, and a beautifully reupholstered interior. This 928 also
              comes with a clean, accident-free Carfax report and Lemon Squad
              pre-purchase inspection, for added bidder confidence. Plus, this
              928 S is offered with the thrill of no reserve! also comes with a
              clean, accident-free Carfax report and Lemon
            </p>
            <p>Read More</p>
          </div>
        </div>

        <div className="bg-skyBlue-10 rounded-[10px] p-5 w-full max-w-[450px] space-y-3">
          <h3 className="text-[20px] font-semibold leading-[30px] capitalize text-black-90 border-b-[1px] pb-2 border-blue-10">
            Vehicle Information
          </h3>
          <div className="flex gap-14">
            <span className="text-[16px] font-medium capitalize text-gray-50 leading-[24px] w-[100px]">
              make
            </span>
            <span className="text-[16px] font-normal leading-[24px] text-black-90">
              Porsche
            </span>
          </div>
          <div className="flex gap-14">
            <span className="text-[16px] font-medium capitalize text-gray-50 leading-[24px] w-[100px]">
              Model
            </span>
            <span className="text-[16px] font-normal leading-[24px] text-black-90">
              928
            </span>
          </div>
          <div className="flex gap-14">
            <span className="text-[16px] font-medium capitalize text-gray-50 leading-[24px] w-[100px]">
              Mileage
            </span>
            <span className="text-[16px] font-normal leading-[24px] text-black-90">
              186,700
            </span>
          </div>
          <div className="flex gap-14">
            <span className="text-[16px] font-medium capitalize text-gray-50 leading-[24px] w-[100px]">
              VIN
            </span>
            <span className="text-[16px] font-normal leading-[24px] text-black-90">
              WP0JB0920GS862765
            </span>
          </div>
          <div className="flex gap-14">
            <span className="text-[16px] font-medium capitalize text-gray-50 leading-[24px] w-[100px]">
              Title Status
            </span>
            <span className="text-[16px] font-normal leading-[24px] text-black-90">
              Clean (VA)
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
