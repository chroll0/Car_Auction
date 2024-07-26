"use client";

import { motion } from "framer-motion";
import { textVariant } from "../utils/motion";

interface SectionTitleProps {
  preTitle?: string;
  title?: string;
}

const SectionTitle: React.FC<SectionTitleProps> = (props) => {
  return (
    <motion.div
      variants={textVariant({ delay: 0.1 })}
      initial="hidden"
      animate="show"
      exit="hidden"
      className="flex w-full flex-col items-center justify-center text-center"
    >
      {props.preTitle && (
        <span className="text-blue-500 font-semibold text-[16px]">
          {props.preTitle}
        </span>
      )}

      {props.title && (
        <h3 className="text-black font-extrabold text-[32px]">{props.title}</h3>
      )}
    </motion.div>
  );
};

export default SectionTitle;
