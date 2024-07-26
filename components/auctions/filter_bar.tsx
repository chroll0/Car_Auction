"use client";

import Image from "next/image";
import { useState } from "react";
import { Checkbox } from "../ui/checkbox";
import { Button } from "../reusable";
import { carModels } from "@/constants/static_data";

// Define the type for car models
type CarModel = "BMW" | "mercedes" | "tesla" | "all";

// Define the type for the brands state
type BrandsState = {
  all: boolean;
  BMW: boolean;
  mercedes: boolean;
  tesla: boolean;
};

const FilterBar = () => {
  const [carType, setCarType] = useState("new");
  const [brands, setBrands] = useState<BrandsState>({
    all: false,
    BMW: false,
    mercedes: false,
    tesla: false,
  });

  const [priceRange, setPriceRange] = useState({ from: 0, to: 0 });

  const handleBrandChange = (brand: CarModel) => {
    setBrands((prev) => {
      const newBrands = { ...prev, [brand]: !prev[brand] };
      if (brand === "all") {
        const allChecked = !prev.all;
        return carModels.reduce(
          (acc, model) => {
            acc[model.carModel as CarModel] = allChecked;
            return acc;
          },
          { all: allChecked } as BrandsState
        );
      } else {
        newBrands.all = false;
      }
      return newBrands;
    });
  };

  const handlePriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setPriceRange((prev) => ({
      ...prev,
      [name]: Number(value),
    }));
  };

  const resetFilters = () => {
    setBrands({
      all: false,
      BMW: false,
      mercedes: false,
      tesla: false,
    });
    setPriceRange({ from: 0, to: 0 });
  };

  return (
    <div className="max-w-[290px] h-auto pt-2 pb-6 shadow-4xl bg-slate-100 rounded-xl flex flex-col gap-4">
      <div>
        <div className="px-4 py-3 flex justify-between items-center">
          <h3 className="text-[20px] font-bold">Filter</h3>
          <span
            onClick={resetFilters}
            className="cursor-pointer text-[12px] font-semibold text-[#FF0000] lowercase"
          >
            Reset
          </span>
        </div>
        <div className="w-full h-[1px] bg-slate-200"></div>
      </div>

      <div className="flex gap-3 flex-col px-4 py-3">
        <h4 className="font-semibold text-[16px]">Type of car</h4>
        <div className="w-full flex items-center justify-between px-4">
          <Button
            type="button"
            title="New car"
            // onClick={() => setCarType("new")}
            variant={
              carType === "new"
                ? "bg-darkBlue-200 text-white border border-slate-300 rounded-[15px] w-[90px] py-2 px-2 text-[14px] font-medium"
                : "bg-white text-slate-400 border border-slate-300 rounded-[15px] w-[90px] py-2 px-2 text-[14px] font-medium"
            }
          />
          <Button
            type="button"
            title="Used car"
            // onClick={() => setCarType("used")}
            variant={
              carType === "used"
                ? "bg-darkBlue-200 text-white border border-slate-300 rounded-[15px] w-[90px] py-2 px-2 text-[14px] font-medium"
                : "bg-white text-slate-400 border border-slate-300 rounded-[15px] w-[90px] py-2 px-2 text-[14px] font-medium"
            }
          />
        </div>
      </div>

      <div className="px-4 py-3">
        <h2 className="text-[16px] font-semibold mb-2">Brand</h2>
        <div className="px-4">
          <label className="flex items-center mb-4 cursor-pointer justify-between">
            <span className="text-[12px] font-semibold capitalize">
              All brands
            </span>
            <Checkbox
              id="all-brands"
              checked={brands.all}
              onCheckedChange={() => handleBrandChange("all")}
              className="w-5 h-5 border rounded-[6px]"
            />
          </label>

          {carModels.map((model) => (
            <label
              key={model.carModel}
              className="flex items-center mb-2.5 cursor-pointer justify-between"
            >
              <div className="flex items-center gap-3 text-[12px] font-semibold uppercase">
                <Image
                  src={model.imgUrl}
                  alt={model.carModel}
                  width={22}
                  height={22}
                />
                <span>{model.carModel}</span>
              </div>
              <Checkbox
                id={`brand-${model.carModel}`}
                checked={brands[model.carModel as CarModel]}
                onCheckedChange={() =>
                  handleBrandChange(model.carModel as CarModel)
                }
                className="w-5 h-5 border rounded-[6px]"
              />
            </label>
          ))}
        </div>
        <span className="text-[12px] capitalize text-slate-400">
          more brand
        </span>
      </div>

      <div className="px-4 py-3">
        <h2 className="text-[16px] font-semibold mb-2">Price range</h2>
        <div className="flex items-center px-4">
          <div className="flex flex-col mr-4 flex-1">
            <span className="text-[12px] font-semibold">From</span>
            <input
              type="number"
              name="from"
              value={priceRange.from}
              onChange={handlePriceChange}
              className="border rounded px-2 py-1 w-full mt-2"
            />
          </div>
          <span className="text-[12px] font-semibold">-</span>
          <div className="flex flex-col ml-4 flex-1">
            <span className="text-[12px] font-semibold">To</span>
            <input
              type="number"
              name="to"
              value={priceRange.to}
              onChange={handlePriceChange}
              className="border rounded px-2 py-1 w-full mt-2"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterBar;
