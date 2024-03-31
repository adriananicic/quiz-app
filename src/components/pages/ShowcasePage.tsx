"use client";
import { Background } from "@/components/molecules/Background";
import { useShowcase } from "@/hooks/use-showcase";
import { Quiz } from "@/types";
import classNames from "classnames";
import React from "react";
import { FaBackward } from "react-icons/fa";

const TextDisplay = ({
  text,
  display,
  index,
}: {
  text: string;
  display: boolean;
  index: number;
}) => {
  return (
    <div
      className={classNames(
        "text-primary  text-center flex items-center flex-col justify-center gap-4 ",
        display ? "opacity-100" : "opacity-0 hidden"
      )}
    >
      <p className="text-lg font-bold text-primary-weak opacity-50">
        Question {index + 1}
      </p>
      <p className="sm:text-4xl text-xl font-semibold ">{text}</p>
    </div>
  );
};

export const ShowcasePage = ({ quiz }: { quiz: Quiz }) => {
  const {
    buttonLabel,
    displayCompleted,
    handleButtonClick,
    index,
    openAnswer,
    handleBackClick,
  } = useShowcase(quiz);

  return (
    <div className="w-full h-full min-h-screen flex flex-col justify-between items-center px-10 py-20 bg-black overflow-y-hidden">
      <Background />
      <div className="text-primary text-2xl z-10 font-semibold">
        {quiz.name}
      </div>
      {!displayCompleted ? (
        <div className="z-10">
          <TextDisplay
            index={index}
            text={"Question: " + quiz.questions[index].question}
            display={!openAnswer}
          />
          <TextDisplay
            index={index}
            text={"Answer: " + quiz.questions[index].answer}
            display={openAnswer}
          />
        </div>
      ) : (
        <p className="text-5xl text-primary text-center">Quiz Completed</p>
      )}

      <div className="flex flex-col items-center justify-center gap-5 w-full h-full z-10 mb-10">
        {!displayCompleted && (
          <p
            className="cursor-pointer text-primary hover:text-primary-strong text-sm"
            onClick={() => handleBackClick()}
          >
            Previous Question
          </p>
        )}
        {!displayCompleted && (
          <p
            onClick={handleButtonClick}
            className="text-primary cursor-pointer hover:text-primary-strong text-2xl "
          >
            {buttonLabel}
          </p>
        )}
        {displayCompleted && (
          <p
            onClick={() => window.location.reload()}
            className="text-primary cursor-pointer hover:text-primary-strong "
          >
            Replay Quiz
          </p>
        )}
      </div>
    </div>
  );
};
