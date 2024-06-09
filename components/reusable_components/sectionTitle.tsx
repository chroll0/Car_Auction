import React from "react";
import Container from "../landing/container";

interface SectionTitleProps {
  align?: string;
  pretitle?: string;
  title?: string;
  children?: React.ReactNode;
}

const SectionTitle: React.FC<SectionTitleProps> = (props) => {
  return (
    <Container
      className={`flex w-full flex-col mt-4 ${
        props.align === "left" ? "" : "items-center justify-center text-center"
      }`}
    >
      {props.pretitle && (
        <span className="text-blue-500 font-semibold text-[14px]">
          {props.pretitle}
        </span>
      )}

      {props.title && (
        <h3 className="text-black font-extrabold text-[30px]">{props.title}</h3>
      )}

      {props.children && (
        <p className="text-blue-500 font-semibold text-[14px]">
          {props.children}
        </p>
      )}
    </Container>
  );
};

export default SectionTitle;
