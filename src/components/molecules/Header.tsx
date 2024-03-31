"use client";
import React from "react";
import { ToggleTheme } from "../Theme/ToggleTheme";
import Link from "next/link";

export const Header = () => {
  return (
    <div className="w-full h-16 p-5 flex items-center justify-between bg-primary">
      <h1 className="sm:text-2xl text-xl  text-neutral">QuizApp</h1>
      <div className="flex items-center justify-center gap-3 sm:text-xl text-xs ">
        <Link
          href="/dashboard"
          className="text-neutral cursor-pointer hover:text-neutral-strong transition-all duration-100"
        >
          Dashboard
        </Link>
        <Link
          href="/about"
          className="text-neutral cursor-pointer hover:text-neutral-strong transition-all duration-100"
        >
          About
        </Link>
        <ToggleTheme />
      </div>
    </div>
  );
};
