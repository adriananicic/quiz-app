import useDialog from "@/components/DIalogProvider";
import { NewQuestion } from "@/components/modals/CreateQuizModal";
import { createQuestion } from "@/server/create-question";
import { createNewQuiz } from "@/server/create-quiz";
import { useState } from "react";

export const useCreateQuiz = () => {
  const {setModal} = useDialog()
  const [loading, setLoading] = useState<boolean>(false)

  const [selectedQuestionIds, setSelectedQuestionIds] = useState<number[]>([]);
  const [newQuestionTitle, setNewQuestionTitle] = useState<string>("");
  const [newQuestionAnswer, setNewQuestionAnswer] = useState<string>("");
  const [newQuestions, setNewQuestions] = useState<NewQuestion[]>([]);
  const [quizTitle, setQuizTitle] = useState<string>("");

  const createNewQuestion = async () => {
    if (newQuestionTitle && newQuestionAnswer) {
      const newQuestion = await createQuestion({
        answer: newQuestionAnswer,
        question: newQuestionTitle,
      });
      setNewQuestions((prev) => [...prev, newQuestion]);
    }
  };

  const removeNewQuestion = (question: NewQuestion) => {
    setNewQuestions((prev) => prev.filter((q) => q !== question));
  };

  const createQuiz = async () => {
    const allIds = [...selectedQuestionIds, ...newQuestions.map((q) => q.id)];
    if (quizTitle && allIds.length > 0) {
      setLoading(true)

      await createNewQuiz({
        name: quizTitle,
        questionIds: allIds,
      });
      window.location.reload();
      setLoading(false)
      setModal(null);
    }
  };

  return {setSelectedQuestionIds, removeNewQuestion,newQuestions,createNewQuestion,setNewQuestionAnswer,setNewQuestionTitle,setQuizTitle,createQuiz, loading}
};
