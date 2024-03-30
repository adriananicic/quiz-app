import { useLoadQuestions } from "@/hooks/use-load-questions";
import React from "react";
import { Dropdown } from "../atoms/Dropdown";
import Heading from "../atoms/Heading";
import { Button } from "../atoms/Button";
import { TextInput } from "../atoms/TextInput";
import { FaTrash } from "react-icons/fa";
import { useEditQuiz } from "@/hooks/use-edit-quiz";
import { Question } from "@/types";
import { NewQuestion } from "./CreateQuizModal";

export const EditQuizModal = ({ id }: { id: number }) => {
  const { questions } = useLoadQuestions();

  const {
    createNewQuestion,
    newQuestions,
    removeNewQuestion,
    setNewQuestionAnswer,
    setNewQuestionTitle,
    setQuizTitle,
    setSelectedQuestionIds,
    loading,
    quizTitle,
    editQuiz,
    removeQuizQuestion,
    quizQuestions,
    error,
  } = useEditQuiz(id);

  let optionIds: number[] = [];
  for (let q of quizQuestions) {
    optionIds.push(q.questionId);
  }

  return (
    <div className="sm:p-10 p-2 flex flex-col gap-3">
      <Heading
        title="Create a new Quiz"
        actions={
          <Button
            loading={loading}
            label="Edit"
            onClick={() => {
              editQuiz();
            }}
          />
        }
      />
      <p className="text-danger text-sm w-max h-4">{error}</p>
      <TextInput
        label="Quiz Title"
        value={quizTitle}
        onChange={(value) => setQuizTitle(value)}
      />
      <p className="text-neutral font-semibold">Linked Questions</p>
      {quizQuestions.map((q: Question) => (
        <div
          key={q.questionId + q.question}
          className="w-full text-neutral flex justify-between items-center"
        >
          <div className="flex flex-col gap-1 m-2">
            <p>
              <span className="font-bold">q:</span> {q.question}
            </p>
            <p>
              <span className="font-bold">a:</span> {q.answer}
            </p>
          </div>
          <FaTrash
            className="cursor-pointer"
            onClick={() => {
              removeQuizQuestion(q);
            }}
          />
        </div>
      ))}
      <div className="w-full flex items-center gap-5">
        <form
          onSubmit={(e) => e.preventDefault()}
          className="w-[50%] h-[300px]"
        >
          <p className="mt-5 text-neutral font-semibold">Create new Question</p>
          <TextInput
            onChange={(value) => setNewQuestionTitle(value)}
            label="Question"
          />
          <TextInput
            onChange={(value) => setNewQuestionAnswer(value)}
            label="Answer"
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
          <div className="h-[250px] overflow-y-auto pt-3">
            {newQuestions.map((question: NewQuestion) => (
              <div
                key={question.id}
                className="w-full flex text-neutral justify-between items-center"
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
                  className="cursor-pointer"
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
        options={questions.filter((q) => !optionIds.includes(q.questionId))}
        title="Select previously made questions"
        setSelected={setSelectedQuestionIds}
      />
    </div>
  );
};
