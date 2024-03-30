"use client";
import { Spinner } from "@/components/atoms/Spinner";
import { useGetQuiz } from "@/hooks/use-get-quiz";
import { ShowcasePage } from "@/components/pages/ShowcasePage";
import React from "react";

const page = ({ params }: { params: { id: string } }) => {
  const quiz = useGetQuiz(Number(params.id));

  if (!quiz) return <Spinner />;

  return <ShowcasePage quiz={quiz} />;
};

export default page;
