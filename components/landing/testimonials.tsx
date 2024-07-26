import Image from "next/image";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { fadeIn } from "../utils/motion";
import { reviews } from "@/constants/static_data";
import { SectionWrapper } from "../hoc";
import { SectionTitle } from "../reusable";

const Testimonials = () => {
  return (
    <>
      <SectionTitle preTitle="Customers" title="Reviews" />
      <div className="flex flex-col lg:flex-row gap-14 h-full pt-8">
        {reviews.map((review, index) => (
          <motion.div
            variants={fadeIn({
              direction: "up",
              type: "spring",
              delay: index * 0.5,
              duration: 0.75,
            })}
            key={review.customerName}
            className="lg:w-[30%] w-full"
          >
            <Tilt
              options={{ max: 5, scale: 1, speed: 250 }}
              className="px-8 py-8 flex flex-col justify-between h-full gap-2 bg-lightGray-gradient border-none shadow-4xl"
            >
              <div className="flex flex-col justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="text-[20px] font-semibold">
                    {review.rating.toFixed(1)}
                  </div>
                  <div className="flex gap-1.5">
                    {[...Array(Math.floor(review.rating))].map((_, index) => (
                      <div key={index}>
                        <Image
                          src="/landing/icons/star.png"
                          width="19"
                          height="19"
                          alt="Star"
                          priority={true}
                          style={{ width: "19px", height: "19px" }}
                        />
                      </div>
                    ))}
                    {review.rating % 1 !== 0 && (
                      <div
                        key="fractional-star"
                        style={{
                          position: "relative",
                          width: "19px",
                          height: "19px",
                          overflow: "hidden",
                        }}
                      >
                        <Image
                          src="/landing/icons/star.png"
                          width="19"
                          height="19"
                          alt="Star"
                          priority={true}
                          style={{
                            position: "absolute",
                            clipPath: `inset(0 ${
                              19 * (1 - (review.rating % 1))
                            }px 0 0)`,
                            width: "19px",
                            height: "19px",
                          }}
                        />
                      </div>
                    )}
                  </div>
                </div>

                <h4 className="text-[22px] capitalize font-semibold">
                  {review.title}
                </h4>
                <p className="text-[14px] text-gray-400 font-semibold leading-normal">
                  {review.feedback}
                </p>
              </div>
              <div className="flex items-center mt-4 space-x-3">
                <div className="flex-shrink-0 overflow-hidden rounded-full w-14 h-14">
                  <Image
                    src={review.imgURL}
                    width="45"
                    height="45"
                    alt="Avatar"
                  />
                </div>
                <div>
                  <div className="text-md font-semibold">
                    {review.customerName}
                  </div>
                  <div className="text-sm font-semibold">{review.date}</div>
                </div>
              </div>
            </Tilt>
          </motion.div>
        ))}
      </div>
    </>
  );
};
export default SectionWrapper(Testimonials, "");
