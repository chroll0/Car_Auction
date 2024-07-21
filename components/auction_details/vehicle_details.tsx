import Image from "next/image";

const CarInformation = () => {
  return (
    <div>
      <div className="w-full">
        <Image
          src="/img/CarInformation.png"
          alt="gallery"
          width={500}
          height={500}
        />
      </div>
    </div>
  );
};

export default CarInformation;
