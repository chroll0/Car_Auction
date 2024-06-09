// components/Testimonials.tsx

"use client";

import Image from "next/image";
import { reviews } from "@/constants/data";
import { Tilt } from "react-tilt";

const Testimonials = () => {
  return (
    <div className="paddingX paddingY grid gap-12 md:grid-cols-1 xl:grid-cols-2">
      {reviews.map((review) => (
        <Tilt key={review.customerName}>
          <div className="lg:col-span-2 xl:col-auto bg-lightGray-gradient">
            <div className="flex flex-col justify-between w-full h-full border-none shadow-4xl px-8 py-8 gap-3">
              <div className="flex items-center gap-3">
                <div className="text-[20px] font-semibold">
                  {review.rating.toFixed(1)}
                </div>
                <div className="flex gap-1.5">
                  {[...Array(Math.floor(review.rating))].map((_, index) => (
                    <div key={index}>
                      <Image
                        src="/images/star.png"
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
                        src="/images/star.png"
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
            </div>
          </div>
        </Tilt>
      ))}
    </div>
  );
};

export default Testimonials;
