import Image from "next/image";
import React from "react";

const Gallery = () => {
  return (
    <div>
      <div className="w-full">
        <Image src="/img/gallery.png" alt="gallery" width={500} height={500} />
      </div>
    </div>
  );
};

export default Gallery;
