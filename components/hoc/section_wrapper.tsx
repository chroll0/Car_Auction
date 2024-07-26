import { motion } from "framer-motion";
import { staggerContainer } from "../utils/motion";
import { FC } from "react";

const SectionWrapper = <P extends object>(Component: FC<P>, idName: string) => {
  const HOC: FC<P> = (props) => {
    return (
      <motion.section
        variants={staggerContainer({
          staggerChildren: 0.5,
          delayChildren: 0.1,
        })}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className="paddingX paddingY w-full relative z-0"
      >
        <span className="hash-span" id={idName}>
          &nbsp; {/* empty space */}
        </span>
        <Component {...props} />
      </motion.section>
    );
  };

  return HOC;
};

export default SectionWrapper;
