import Image from "next/image";
import { motion } from "framer-motion";

import { slideIn } from "../utils/motion";
import { Button, SectionTitle } from "@/components/reusable";
import { SectionWrapper } from "../hoc";
import { benefits } from "@/constants/static_data";

const Benefits = () => {
  return (
    <>
      <SectionTitle preTitle="Became a Buyer" title="Steps & Sign Up" />
      <div className="flex flex-col md:flex-row items-center gap-12 w-full justify-center mt-6 px-4">
        <motion.div
          variants={slideIn({
            direction: "left",
            type: "tween",
            delay: 0.1,
            duration: 0.75,
          })}
        >
          <Image
            src="/landing/agreement.png"
            alt="agreement"
            width={600}
            height={500}
            priority={true}
            style={{ width: "100%", height: "auto" }}
          />
        </motion.div>
        <motion.div
          variants={slideIn({
            direction: "right",
            type: "tween",
            delay: 0.1,
            duration: 0.75,
          })}
          className="flex flex-col gap-8 max-w-[500px]"
        >
          {benefits.map((element) => (
            <div
              className="flex flex-row gap-6 items-center"
              key={element.title}
            >
              <div className="bg-darkBlue-200 w-[70px] h-[70px] rounded-full flex items-center justify-center">
                <Image
                  src={element.imgUrl}
                  alt={element.alt}
                  width={40}
                  height={40}
                  style={{ width: "auto", height: "auto" }}
                />
              </div>
              <div className="flex w-[70%] gap-1 flex-col">
                <h5 className="text-[18px] md:text-[20px] font-semibold">
                  {element.title}
                </h5>
                <p className="text-[12px] md:text-[14px] font-medium text-gray-100">
                  {element.paragraph}
                </p>
              </div>
            </div>
          ))}
          <div className="flex justify-center w-full">
            <Button
              type="button"
              title="Let's start"
              variant="bg-black-100 text-white mt-4 rounded-[8px] w-[130px] font-semibold px-4 py-2 text-[18px] hover:w-[160px] transition"
            />
          </div>
        </motion.div>
      </div>
    </>
  );
};
export default SectionWrapper(Benefits, "");
