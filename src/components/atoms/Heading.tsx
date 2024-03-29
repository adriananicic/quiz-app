"use client";
import React, { FC, ReactNode } from "react";

interface IHeadingProps {
  title: string;
  actions?: ReactNode;
}

const Heading: FC<IHeadingProps> = ({ actions, title }) => {
  return (
    <div className="w-full flex items-center justify-between p-5">
      <h1 className="text-4xl text-neutral">{title}</h1>
      <div>{actions}</div>
    </div>
  );
};

export default Heading;
