"use client";

import { useState } from "react";
import Image from "next/image";

const Gallery = () => {
  const gallery = [
    "/img/car1.png",
    "/img/car2.png",
    "/img/car3.png",
    "/img/car4.png",
  ];

  const [mainImage, setMainImage] = useState(gallery[0]);

  // Function to handle thumbnail click
  const handleThumbnailClick = (clickedImage: string) => {
    setMainImage(clickedImage);
  };

  return (
    <div className="flex flex-col gap-6 w-full">
      <div className="w-full">
        {/* Main large image */}
        <div className="w-[full]">
          <Image
            src={mainImage}
            alt="main car"
            width={3000}
            height={2000}
            style={{ width: "full", height: "full" }}
          />
        </div>
        <div className="flex pt-4 gap-6 overflow-x-auto">
          {/* Thumbnails */}
          {gallery.map((element, index) => (
            <div
              key={index}
              className="rounded-[10px] transition-all cursor-pointer border-[2.5px] border-white hover:border-blue-10"
              onClick={() => handleThumbnailClick(element)}
            >
              <Image
                src={element}
                alt={`car ${index + 1}`}
                width={200}
                height={200}
                className="rounded-[10px]"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
