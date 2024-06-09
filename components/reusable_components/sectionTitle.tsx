import React from "react";
import Container from "../landing/container";

const SectionTitle = (props) => {
  return (
    <Container
      className={`flex w-full flex-col mt-4 ${
        props.align === "left" ? "" : "items-center justify-center text-center"
      }`}
    >
      {props.pretitle && (
        // <div className="text-sm font-bold tracking-wider text-indigo-600 uppercase">
        //   {props.pretitle}
        // </div>
        <span className="text-blue-500 font-semibold text-[14px]">
          {props.pretitle}
        </span>
      )}

      {props.title && (
        // <h2 className="max-w-2xl mt-3 text-3xl font-bold leading-snug tracking-tight text-gray-800 lg:leading-tight lg:text-4xl dark:text-white">
        //   {props.title}
        // </h2>
        <h3 className="text-black font-extrabold text-[30px]">{props.title}</h3>
      )}

      {props.children && (
        // <p className="max-w-2xl py-4 text-lg leading-normal text-gray-500 lg:text-xl xl:text-xl dark:text-gray-300">
        //   {props.children}
        // </p>
        <p className="text-blue-500 font-semibold text-[14px]">
          {props.children}
        </p>
      )}
    </Container>
  );
};

export default SectionTitle;
