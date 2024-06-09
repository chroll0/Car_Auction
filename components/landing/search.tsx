"use client";

import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { Button } from "../reusable_components";

const Search = () => {
  const [mark, setMark] = useState("");
  const [model, setModel] = useState("");
  const [year, setYear] = useState("");
  const [more, setMore] = useState("");

  return (
    <div className="paddingX paddingY">
      <div className="shadow-3xl border rounded-3xl flex flex-col px-12 py-6 gap-4">
        <h3 className="text-[24px] font-semibold">Discover</h3>
        <form className="flex flex-row gap-8 justify-between items-end flex-wrap pb-4">
          <label className="flex flex-col">
            <span className="font-medium text-[16px] text-black mb-2">
              Mark
            </span>
            <input
              type="text"
              name="mark"
              value={mark}
              onChange={(e) => setMark(e.target.value)}
              placeholder="Search by vin or Lot"
              className="py-2 px-3 rounded-[30px] outline-none border border-slate-300 text-[12px] tracking-wide"
            />
          </label>
          <label className="flex flex-col">
            <span className="font-medium text-[16px] text-black mb-2">
              Model
            </span>
            <input
              type="text"
              name="model"
              value={model}
              onChange={(e) => setModel(e.target.value)}
              placeholder="Enter model"
              className="py-2 px-3 rounded-[30px] outline-none border border-slate-300 text-[12px] tracking-wide"
            />
          </label>
          <label className="flex flex-col">
            <span className="font-medium text-[16px] text-black mb-2">
              Year
            </span>
            <input
              type="text"
              name="year"
              value={year}
              onChange={(e) => setYear(e.target.value)}
              placeholder="Enter year"
              className="py-2 px-3  rounded-[30px] outline-none border border-slate-300 text-[12px] tracking-wide"
            />
          </label>
          <label className="flex flex-col">
            <span className="font-medium text-[16px] text-black mb-2">
              More
            </span>
            <input
              type="text"
              name="more"
              value={more}
              onChange={(e) => setMore(e.target.value)}
              placeholder="Search more"
              className="py-2 px-3  rounded-[30px] outline-none border border-slate-300 text-[12px] tracking-wide"
            />
          </label>
          <div className="bg-black-100 text-white font-medium w-[120px] h-[36px] rounded-full flex p-2 justify-center items-center border border-black-100 hover:bg-slate-300 hover:text-black-100 cursor-pointer">
            <Button type="button" title="Search" variant="mr-4 text-[14px]" />
            <FaSearch className="text-[14px]" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Search;
