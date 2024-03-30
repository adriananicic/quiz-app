"use client";
import { Background } from "@/components/molecules/Background";
import Link from "next/link";
import React from "react";

export const LandingPage = () => {
  const handleCodeReviewClick = () => {
    window.open("https://github.com/adriananicic/quiz-app", "_blank");
  };

  return (
    <div className="w-full h-full min-h-screen">
      <div className="fixed top-0 left-0 right-0 bottom-0 bg-black" />
      <Background />
      <div className="w-full h-full absolute top-0 left-0 sm:p-0 p-5 ">
        <div className="flex flex-col w-full h-full justify-center items-center">
          <h1 className="sm:text-6xl text-4xl font-bold text-primary text-center">
            The best Quiz app out there
          </h1>
        </div>
        <div className="w-full h-full flex flex-col justify-between p-20  items-center mb-5">
          <div className="flex flex-col items-center gap-10">
            <p className="text-2xl text-primary-weak font-semibold text-center ">
              Want to create a quiz?
            </p>

            <Link href="/dashboard">
              <p className="text-2xl text-primary-weak font-semibold rounded-lg py-2 px-4  border-[1px] border-primary-strong">
                Click here
              </p>
            </Link>
          </div>
          <div
            onClick={handleCodeReviewClick}
            className="mt-20 text-4xl hover:text-primary-strong duration-150 transition-all text-primary-weak font-semibold cursor-pointer text-center "
          >
            Code Review
          </div>
        </div>
      </div>
    </div>
  );
};
