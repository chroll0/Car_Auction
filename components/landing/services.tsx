import { serviceLinks } from "@/constants/data";
import Image from "next/image";

const Banner = () => {
  return (
    <div className="w-full flex justify-center">
      <div className="paddingX paddingY mt-8 flex flex-wrap justify-center items-center gap-12 max-w-[1436px]">
        {serviceLinks.map((service, index) => (
          <div key={service.number} className="flex flex-1 w-full relative">
            <div className="min-w-[260px] flex justify-center items-center w-full gap-8 flex-col">
              <div className="w-[180px] h-[180px] rounded-full bg-darkBlue-200 flex justify-center items-end py-10 relative">
                <div className="w-[65px] h-[65px] bg-black-100 rounded-full flex justify-center items-center absolute top-[-20px]">
                  <span className="text-white text-[35px]">
                    {service.number}
                  </span>
                </div>
                <div>
                  <Image
                    src={service.icon}
                    alt={`Icon for ${service.title}`}
                    width={100}
                    height={100}
                    priority={true}
                    style={{ width: "auto", height: "auto" }}
                  />
                </div>
              </div>
              <div className="flex flex-col gap-4 justify-center text-center max-w-[300px]">
                <h3 className="text-[20px] font-semibold">{service.title}</h3>
                <p className="text-gray-100 text-[14px]">{service.text}</p>
              </div>
            </div>
            {index !== 2 && index !== 4 && (
              <div className="absolute bottom-[75%] right-[-90px] hidden lg:block">
                <Image
                  src="/images/arrow.png"
                  alt="arrow"
                  width={100}
                  height={100}
                  priority={true}
                  style={{ width: "auto", height: "auto" }}
                />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Banner;
