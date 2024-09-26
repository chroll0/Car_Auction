const CarInformation = () => {
  return (
    <div className="bg-skyBlue-10 rounded-[10px] p-5 w-full max-w-[450px] space-y-3">
      <h3 className="text-[20px] font-semibold leading-[30px] capitalize text-black-90 border-b-[1px] pb-2 border-blue-10">
        Vehicle Information
      </h3>
      <div className="flex gap-14">
        <span className="text-[16px] font-medium capitalize text-gray-50 leading-[24px] w-[100px]">
          make
        </span>
        <span className="text-[16px] font-normal leading-[24px] text-black-90">
          Porsche
        </span>
      </div>
      <div className="flex gap-14">
        <span className="text-[16px] font-medium capitalize text-gray-50 leading-[24px] w-[100px]">
          Model
        </span>
        <span className="text-[16px] font-normal leading-[24px] text-black-90">
          928
        </span>
      </div>
      <div className="flex gap-14">
        <span className="text-[16px] font-medium capitalize text-gray-50 leading-[24px] w-[100px]">
          Mileage
        </span>
        <span className="text-[16px] font-normal leading-[24px] text-black-90">
          186,700
        </span>
      </div>
      <div className="flex gap-14">
        <span className="text-[16px] font-medium capitalize text-gray-50 leading-[24px] w-[100px]">
          VIN
        </span>
        <span className="text-[16px] font-normal leading-[24px] text-black-90">
          WP0JB0920GS862765
        </span>
      </div>
      <div className="flex gap-14">
        <span className="text-[16px] font-medium capitalize text-gray-50 leading-[24px] w-[100px]">
          Title Status
        </span>
        <span className="text-[16px] font-normal leading-[24px] text-black-90">
          Clean (VA)
        </span>
      </div>
    </div>
  );
};

export default CarInformation;
