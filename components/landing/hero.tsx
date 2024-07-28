import Image from "next/image";
import { motion } from "framer-motion";
import { SectionWrapper } from "../hoc";

import { fadeIn, slideIn } from "../utils/motion";
import { Button } from "@/components/reusable";

const Hero = () => {
  return (
    <div className="flex justify-center flex-col md:flex-row items-center gap-8 w-full">
      <motion.div
        variants={fadeIn({
          delay: 0.1,
          duration: 0.5,
        })}
        className="flex flex-1/2 flex-col gap-14 w-full md:w-auto"
      >
        <div className="flex flex-col gap-2">
          <h1 className="xl:min-w-[515px] xl:text-[78px] lg:text-[62px] text-[50px] font-extrabold tracking-[0.75px] text-darkBlue-100 leading-[1.3] ">
            Find your <br />
            <span className="text-darkBlue-200">Perfect Match</span>
            <br /> At Auction.
          </h1>
          <span className="text-[18px] font-semibold">
            Unlock unbeatable deals on top-quality cars.
          </span>
        </div>
        <div className="w-full flex gap-8 flex-wrap sm:flex-nowrap">
          <Button
            type="button"
            title="Buy a Car"
            variant="bg-darkBlue-200 font-semibold rounded-[6px] text-white hover:text-darkBlue-200 hover:bg-slate-200 px-3 py-3 w-[160px] shadow-3xl border border-slate-500"
            link="/pages/auctions"
          />
          <Button
            type="button"
            title="Became a Seller"
            variant="bg-white font-semibold text-darkBlue-200 rounded-[6px] w-[160px] shadow-3xl border border-slate-500 px-3 py-3 hover:bg-slate-200"
            link="/pages/add_car_form"
          />
        </div>
      </motion.div>

      <motion.div
        variants={slideIn({
          direction: "right",
          type: "tween",
          delay: 0.01,
          duration: 1,
        })}
      >
        <Image
          src="/landing/hero.png"
          alt="auto"
          width={800}
          height={500}
          priority={true}
        />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Hero, "");
