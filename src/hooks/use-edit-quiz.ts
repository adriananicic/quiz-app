import useDialog from "@/components/DIalogProvider";
import { NewQuestion } from "@/components/modals/CreateQuizModal";
import { createQuestion } from "@/server/create-question";
import { editQuizById } from "@/server/edit-quiz";
import { getQuizById } from "@/server/get-quiz-by-id";
import { Question, Quiz } from "@/types";
import { useEffect, useState } from "react";

export const useEditQuiz = (id:number) => {
  const {setModal} = useDialog()
  const [loading, setLoading] = useState<boolean>(false)

  const [quizQuestions, setQuizQuestions] = useState<Question[]>([])
  
  const [selectedQuestionIds, setSelectedQuestionIds] = useState<number[]>([]);
  const [newQuestionTitle, setNewQuestionTitle] = useState<string>("");
  const [newQuestionAnswer, setNewQuestionAnswer] = useState<string>("");
  const [newQuestions, setNewQuestions] = useState<NewQuestion[]>([]);
  const [quizTitle, setQuizTitle] = useState<string>("");

  const [error, setError] = useState<string | null>()

  const fetchQ = async ()=>{
    const quiz = await getQuizById(id)
    setQuizTitle(quiz.name)
    setQuizQuestions(quiz.questions)
  }

  useEffect(()=>{
    fetchQ()
  },[])

  const removeQuizQuestion = (question:Question)=>{
    setQuizQuestions(prev=>prev.filter(q=>q!==question))
  }
  
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

  const editQuiz = async () => {
    const allIds = [...selectedQuestionIds, ...newQuestions.map((q) => q.id), ...quizQuestions.map(q=>q.questionId)];
    if (quizTitle) {
      setError(null)
      setLoading(true)

      await editQuizById({
        name: quizTitle,
        questionIds: allIds,
      }, id);
      window.location.reload();
      setLoading(false)
      setModal(null);
    }else{
      setError('Title or Questions missing')
    }
  };

  return {setSelectedQuestionIds, removeNewQuestion,newQuestions,createNewQuestion,setNewQuestionAnswer,setNewQuestionTitle,setQuizTitle,editQuiz, loading, quizTitle, removeQuizQuestion, quizQuestions, error}
};
