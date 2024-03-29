import { getQuizzes } from "@/server/get-quizzes";
import { Quiz } from "@/types";
import { useEffect, useState } from "react";


export const useLoadQuizzes = ()=>{
    const [quizzes, setQuizzes] = useState<Quiz[]>([]);
    const [isLoading, setLoading] = useState<boolean>(true)

    const fetchQuizzes = async () => {
        setLoading(true)
        try {
          const fetchedQuizzes = await getQuizzes();
          setQuizzes(fetchedQuizzes);
        } catch (error) {
          console.error("Error fetching quizzes:", error);
        }
        setLoading(false)
      };
      

  useEffect(() => {
    fetchQuizzes();
  }, []); 

  const refetch= async()=>{
    await fetchQuizzes()
  }

  return {quizzes, isLoading, refetch}

}

