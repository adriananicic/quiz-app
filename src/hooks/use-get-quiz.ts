import { getQuizById } from "@/server/get-quiz-by-id"
import { Quiz } from "@/types"
import { useEffect, useState } from "react"

export const useGetQuiz = (id:number)=>{
    const [quiz, setQuiz] = useState<Quiz>()
    const getQuiz = async ()=>{
        const q = await getQuizById(id)
        setQuiz(q)
    }

    useEffect(()=>{
        getQuiz()
    },[])

    return quiz
}