import { Button } from "@/components/reusable_components";
import Image from "next/image";

const Benefits = () => {
  return (
    <div className="paddingX paddingY flex flex-col md:flex-row items-center gap-12 w-full justify-center">
      <div>
        <Image
          src="/images/agreement.png"
          alt="agreement"
          width={800}
          height={500}
          priority={true}
        />
      </div>

      <div className="flex flex-col gap-8 max-w-[400px]">
        <div className="flex flex-row gap-6">
          <div className="bg-darkBlue-200 w-[70px] h-[70px] rounded-full flex items-center justify-center">
            <Image
              src="/images/libra.png"
              alt="libra"
              width={40}
              height={40}
              style={{ width: "auto", height: "auto" }}
            />
          </div>
          <div className="flex w-[70%] gap-1 flex-col">
            <h5 className="text-[18px] font-semibold">
              Deals For Every Budget
            </h5>
            <p className="text-[12px] font-medium text-gray-100">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry&apos;s standard dummy
              text ever since
            </p>
          </div>
        </div>

        <div className="flex flex-row gap-6">
          <div className="bg-darkBlue-200 w-[70px] h-[70px] rounded-full flex items-center justify-center">
            <Image
              src="/images/safety.png"
              alt="safety"
              width={40}
              height={40}
              priority={true}
              style={{ width: "auto", height: "auto" }}
            />
          </div>
          <div className="flex w-[70%] gap-1 flex-col">
            <h5 className="text-[18px] font-semibold">Best Price Guaranteed</h5>
            <p className="text-[12px] font-medium text-gray-100">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry&apos;s standard dummy
              text ever since
            </p>
          </div>
        </div>

        <div className="flex flex-row gap-6">
          <div className="bg-darkBlue-200 w-[70px] h-[70px] rounded-full flex items-center justify-center">
            <Image
              src="/images/settings.png"
              alt="settings"
              width={40}
              height={40}
              priority={true}
            />
          </div>
          <div className="flex w-[70%] gap-1 flex-col">
            <h5 className="text-[18px] font-semibold">Support 24/7</h5>
            <p className="text-[12px] font-medium text-gray-100">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
          </div>
        </div>

        <Button
          type="button"
          title="Let's start"
          variant="bg-black-100 text-white mt-8 rounded-[12px] max-w-[130px] font-semibold px-4 py-2 text-[18px]"
        />
      </div>
    </div>
  );
};

export default Benefits;
