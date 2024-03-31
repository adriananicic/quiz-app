import { useLoadQuestions } from "@/hooks/use-load-questions";
import React from "react";
import { Dropdown } from "../atoms/Dropdown";
import Heading from "../atoms/Heading";
import { Button } from "../atoms/Button";
import { TextInput } from "../atoms/TextInput";
import { FaTrash } from "react-icons/fa";
import { useCreateQuiz } from "@/hooks/use-create-quiz";

export type NewQuestion = {
  question: string;
  answer: string;
  id: number;
};

export const CreateQuizModal = () => {
  const { questions } = useLoadQuestions();

  const {
    createNewQuestion,
    createQuiz,
    newQuestions,
    removeNewQuestion,
    setNewQuestionAnswer,
    setNewQuestionTitle,
    setQuizTitle,
    setSelectedQuestionIds,
    loading,
    error,
    newQuestionAnswer,
    newQuestionTitle,
  } = useCreateQuiz();

  return (
    <div className="sm:p-10 p-2 flex flex-col gap-3">
      <Heading
        title="Create a new Quiz"
        actions={
          <Button
            loading={loading}
            label="Create"
            onClick={() => {
              createQuiz();
            }}
          />
        }
      />
      <p className="text-danger text-sm w-max h-4">{error}</p>
      <TextInput label="Quiz Title" onChange={(value) => setQuizTitle(value)} />
      <div className="w-full flex items-center gap-5">
        <form
          onSubmit={(e) => e.preventDefault()}
          className="w-[50%] h-[300px]"
        >
          <p className="mt-5 text-neutral font-semibold">Create new Question</p>
          <TextInput
            onChange={(value) => setNewQuestionTitle(value)}
            label="Question"
            value={newQuestionTitle}
          />
          <TextInput
            onChange={(value) => setNewQuestionAnswer(value)}
            label="Answer"
            value={newQuestionAnswer}
          />
          <Button
            submit
            label="Add"
            className="bg-success"
            onClick={() => {
              createNewQuestion();
            }}
          />
        </form>
        <div className="w-[50%]  ">
          <p className="mt-5 text-neutral font-semibold">New Questions:</p>
          <div className="h-[250px] overflow-y-auto pt-3 overflow-x-hidden">
            {newQuestions.map((question: NewQuestion) => (
              <div
                key={question.id}
                className="w-full text-neutral flex justify-between items-center"
              >
                <div className="flex flex-col gap-1 m-2">
                  <p>
                    <span className="font-bold">q:</span> {question.question}
                  </p>
                  <p>
                    <span className="font-bold">a:</span> {question.answer}
                  </p>
                </div>
                <FaTrash
                  className="cursor-pointer hover:scale-110 transition-all duration-150 "
                  onClick={() => {
                    removeNewQuestion(question);
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      <Dropdown
        options={questions}
        title="Select previously made questions"
        setSelected={setSelectedQuestionIds}
      />
    </div>
  );
};
