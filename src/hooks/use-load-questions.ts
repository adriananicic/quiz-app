import { getQuestions } from "@/server/get-questions";
import { getQuizzes } from "@/server/get-quizzes";
import { Question } from "@/types";
import { useEffect, useState } from "react";

export const useLoadQuestions = ()=>{
    const [questions, setQuestions] = useState<Question[]>([]);
    const [isLoading, setLoading] = useState<boolean>(true)

    const fetchQuestions = async () => {
        setLoading(true)
        try {
          const fetchedQuizzes = await getQuestions();
          setQuestions(fetchedQuizzes);
        } catch (error) {
          console.error("Error fetching quizzes:", error);
        }
        setLoading(false)
      };

      const refetch = ()=>{
        fetchQuestions()
      }

  useEffect(() => {
    fetchQuestions();
  }, []); 

  return {questions, refetch, isLoading}

}

