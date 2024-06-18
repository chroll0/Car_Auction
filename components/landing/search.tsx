"use client";

import { Button } from "@/components/reusable_components";
import { useState } from "react";
import { FaSearch } from "react-icons/fa";

const Search = () => {
  const [mark, setMark] = useState("");
  const [model, setModel] = useState("");
  const [year, setYear] = useState("");
  const [more, setMore] = useState("");

  return (
    <div className="paddingX paddingY">
      <div className="shadow-3xl border rounded-3xl flex flex-col px-12 py-6 gap-4">
        <h3 className="text-[24px] font-semibold">Discover</h3>
        <form className="flex flex-col gap-8 justify-between items-end flex-wrap pb-4 md:flex-row w-full">
          <label htmlFor="mark" className="flex flex-col w-full md:w-auto">
            <span className="font-medium text-[16px] text-black mb-2">
              Mark
            </span>
            <input
              id="mark"
              type="text"
              name="mark"
              value={mark}
              onChange={(e) => setMark(e.target.value)}
              placeholder="Search by vin or Lot"
              className="py-2 px-3 rounded-[30px] outline-none border border-slate-300 text-[12px] tracking-wide"
            />
          </label>
          <label htmlFor="model" className="flex flex-col w-full md:w-auto">
            <span className="font-medium text-[16px] text-black mb-2">
              Model
            </span>
            <input
              id="model"
              type="text"
              name="model"
              value={model}
              onChange={(e) => setModel(e.target.value)}
              placeholder="Enter model"
              className="py-2 px-3 rounded-[30px] outline-none border border-slate-300 text-[12px] tracking-wide"
            />
          </label>
          <label htmlFor="year" className="flex flex-col w-full md:w-auto">
            <span className="font-medium text-[16px] text-black mb-2">
              Year
            </span>
            <input
              id="year"
              type="text"
              name="year"
              value={year}
              onChange={(e) => setYear(e.target.value)}
              placeholder="Enter year"
              className="py-2 px-3  rounded-[30px] outline-none border border-slate-300 text-[12px] tracking-wide"
            />
          </label>
          <label htmlFor="more" className="flex flex-col w-full md:w-auto">
            <span className="font-medium text-[16px] text-black mb-2">
              More
            </span>
            <input
              id="more"
              type="text"
              name="more"
              value={more}
              onChange={(e) => setMore(e.target.value)}
              placeholder="Search more"
              className="py-2 px-3 rounded-[30px] outline-none border border-slate-300 text-[12px] tracking-wide"
            />
          </label>
          <div
            className="bg-black-100 w-full text-white font-medium md:w-[120px] h-[36px] rounded-full flex p-2 
          justify-center items-center border border-black-100 hover:bg-slate-300 hover:text-black-100 cursor-pointer"
          >
            <Button type="button" title="Search" variant="mr-4 text-[14px]" />
            <FaSearch className="text-[14px]" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Search;
