"use client";
import { Background } from "@/components/molecules/Background";
import { useShowcase } from "@/hooks/use-showcase";
import { Quiz } from "@/types";
import classNames from "classnames";
import React from "react";

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
  } = useShowcase(quiz);

  return (
    <div className="w-full h-full min-h-screen flex flex-col justify-between items-center px-10 py-20 bg-black overflow-y-hidden">
      <Background />
      <div className="text-primary text-2xl  font-semibold">{quiz.name}</div>
      {!displayCompleted ? (
        <div>
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

      <p
        onClick={handleButtonClick}
        className={classNames(
          "text-primary cursor-pointer z-10 mb-10",
          displayCompleted && "opacity-0"
        )}
      >
        {buttonLabel}
      </p>
    </div>
  );
};
