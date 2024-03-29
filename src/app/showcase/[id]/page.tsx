"use client";
import { Spinner } from "@/components/atoms/Spinner";
import { useGetQuiz } from "@/hooks/use-get-quiz";
import { ShowcasePage } from "@/pages/ShowcasePage";
import { getQuizById } from "@/server/get-quiz-by-id";
import React from "react";

const page = ({ params }: { params: { id: string } }) => {
  const quiz = useGetQuiz(Number(params.id));

  if (!quiz) return <Spinner />;

  return <ShowcasePage quiz={quiz} />;
};

export default page;
