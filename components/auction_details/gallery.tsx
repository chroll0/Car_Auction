import Image from "next/image";
import React from "react";
import { Button } from "../reusable";

const Gallery = () => {
  return (
    <div className="flex flex-col gap-6 w-full">
      <div className="w-full">
        <Image
          src="/img/car1.png"
          alt="car"
          width={3000}
          height={2000}
          style={{ width: "auto", height: "auto" }}
        />
        <div className="flex pt-4 gap-8 overflow-x-auto">
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
    </div>
  );
};

export default Gallery;
