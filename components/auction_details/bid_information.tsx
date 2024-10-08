import Image from "next/image";
import { Button } from "../reusable";

const BidInformation = () => {
  return (
    <div className="flex flex-col gap-6 w-full">
      <div className="flex lg:flex-row flex-col-reverse w-full gap-8 justify-between">
        <div className="flex lg:flex-row flex-col justify-between items-center rounded-[10px] w-full bg-skyBlue-10 px-4 py-3 gap-10">
          <div className="flex gap-4 justify-center items-center flex-wrap">
            <div className="flex gap-4 justify-center items-center">
              <div className="flex justify-center items-center w-[24px] h-[24px]">
                <Image
                  src="/auctionLot/time.png"
                  alt="car"
                  width={24}
                  height={24}
                  style={{ width: "auto", height: "auto" }}
                />
              </div>
              <p className="text-blue-10 text-[20px] font-semibold leading-[30px] capitalize">
                time left
              </p>
            </div>
            <p className="text-[20px] font-semibold leading-[30px] capitalize text-black-90">
              7 <span>Days</span>
            </p>
          </div>

          <div className="flex gap-4 justify-center items-center flex-wrap">
            <div className="flex gap-4 justify-center items-center">
              <div className="flex justify-center items-center w-[24px] h-[24px]">
                <Image
                  src="/auctionLot/arrow.png"
                  alt="car"
                  width={24}
                  height={24}
                  style={{ width: "auto", height: "auto" }}
                />
              </div>
              <p className="text-blue-10 text-[20px] font-semibold leading-[30px] capitalize">
                high bid
              </p>
            </div>
            <p className="text-[20px] font-semibold leading-[30px] capitalize text-black-90">
              $ <span>2,500</span>
            </p>
          </div>

          <div className="flex gap-4 justify-center items-center flex-wrap">
            <div className="flex gap-4 justify-center items-center">
              <div className="flex justify-center items-center w-[24px] h-[24px]">
                <Image
                  src="/auctionLot/number.png"
                  alt="car"
                  width={24}
                  height={24}
                  style={{ width: "auto", height: "auto" }}
                />
              </div>
              <p className="text-blue-10 text-[20px] font-semibold leading-[30px] capitalize">
                bids
              </p>
            </div>
            <p className="text-[20px] font-semibold leading-[30px] capitalize text-black-90">
              <span>5</span>
            </p>
          </div>
        </div>
        <Button
          type="button"
          title="place bid"
          variant="w-full lg:w-[125px] capitalize text-[20px] font-semibold bg-blue-10 px-4 py-3 text-white rounded-[10px]"
        />
      </div>

      <div className="flex w-full gap-8 items-center flex-wrap">
        <Button
          type="button"
          title="21,000"
          variant="capitalize text-[20px] font-semibold px-10 py-3 border border-blue-10 text-blue-10 rounded-[10px]"
        />
        <Button
          type="button"
          title="Make Offer"
          variant="capitalize text-[20px] font-semibold bg-skyBlue-10 px-6 py-[13px] rounded-[10px] text-blue-10"
        />
        <Button
          type="button"
          title="Buy Now 25,000"
          variant="capitalize text-[20px] font-semibold bg-blue-10 px-10 py-[13px] text-white rounded-[10px]"
        />
        <span className="text-[16px] leading-[24px] font-semibold text-blue-10">
          Ending: August 29th at 11:18 AM PDT
        </span>
      </div>

      <div className="flex flex-col gap-2">
        <h2 className="text-[20px] font-semibold leading-[30px] text-blue-10">
          Description
        </h2>
        <p className="max-w-[700px] mt-2">
          I love the Porsche 928, as it boasts futuristic styling, excellent
          performance, and a big V8. This particular example is a desirable
          1986.5 928 S, which means it gets the upgraded brakes and suspension
          of the later S4 model. It&apos;s also fitted with numerous
          modifications intended to enhance its performance and style -
          including 18-inch Turbo Twist wheels, 928 S4 GT front mufflers, Bosch
          fuel injectors, a Porken timing belt tensioner, BOGE front shocks, and
          a beautifully reupholstered interior. This 928 also comes with a
          clean, accident-free Carfax report and Lemon Squad pre-purchase
          inspection, for added bidder confidence. Plus, this 928 S is offered
          with the thrill of no reserve! also comes with a clean, accident-free
          Carfax report and Lemon
        </p>
        <p className="text-[16px] leading-[19px] text-blue-10">Read More</p>
      </div>

      <div className="flex flex-col gap-4 mt-2">
        <h2 className="text-[20px] font-semibold leading-[30px] text-blue-10">
          Dealer info
        </h2>
        <div className="rounded-[10px] bg-skyBlue-10 flex lg:flex-row flex-col lg:gap-0 gap-2 lg:items-center items-start justify-between h-full px-5 py-4">
          <div className="flex items-center gap-4">
            <Image
              src="/landing/user3.jpg"
              alt="star"
              width={75}
              height={75}
              className="rounded-full"
            />
            <div className="flex flex-col text-[16px] w-full capitalize">
              <p className="font-semibold">jotia caava</p>
              <span className="font-medium text-blue-10">Dealer</span>
            </div>
          </div>

          <div className="w-[1px] h-full bg-blue-10"></div>

          <div className="flex gap-2 items-center">
            <Image
              src="/auctionLot/phone.png"
              alt="star"
              width={24}
              height={24}
            />
            <p className="font-semibold text-[16px] w-full">
              +995 571 07 86 68
            </p>
          </div>

          <div className="w-[1px] h-full bg-blue-10"></div>

          <div className="flex gap-2 items-center">
            <Image
              src="/auctionLot/email.png"
              alt="star"
              width={24}
              height={24}
            />
            <p className="font-semibold text-[16px] w-full">
              jotia.caava.91@gmail.com
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BidInformation;
