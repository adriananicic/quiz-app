"use client";
import Link from "next/link";
import React from "react";

export const LandingPage = () => {
  return (
    <div className="w-full h-full min-h-screen">
      <div className="fixed top-0 left-0 right-0 bottom-0 bg-black" />
      <img
        className="w-full h-full fixed opacity-20 object-cover "
        src="https://assets-global.website-files.com/5f8b3f92189560cd389cf2b3/63ea3ee7ccb1b557b4a39e79_Team-Building-Quiz-Questions2.jpg"
        alt=""
      />
      <div className="w-full h-full absolute top-0 left-0 ">
        <div className="flex flex-col w-full h-full justify-center items-center">
          <h1 className="text-6xl font-bold text-blue-600">
            The best Quiz app out there
          </h1>
        </div>
        <div className="w-full h-full flex flex-col justify-between p-20  items-center mb-5">
          <div className="flex flex-col items-center gap-10">
            <p className="text-2xl text-blue-500 font-semibold">
              Want to create a quiz?
            </p>

            <Link href="/dashboard">
              <p className="text-2xl text-blue-500 font-semibold rounded-lg py-2 px-4  border-[1px] border-blue-300">
                Click here
              </p>
            </Link>
          </div>
          <div
            onClick={() => {
              window.open("https://github.com/adriananicic/quiz-app", "_blank");
            }}
            className="mt-20 text-4xl hover:text-blue-300 duration-150 transition-all text-blue-500 font-semibold cursor-pointer"
          >
            Code Review
          </div>
        </div>
      </div>
    </div>
  );
};
