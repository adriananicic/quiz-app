import { Quiz } from "@/types";
import { useState } from "react";

export const useShowcase = (quiz:Quiz) => {
  const [index, setIndex] = useState<number>(0);
  const [openAnswer, setOpenAnswer] = useState<boolean>(false);
  const [buttonLabel, setButtonLabel] = useState<string>("Show answer");
  const [displayCompleted, setDisplayCompleted] = useState<boolean>(false);

  const handleButtonClick = () => {
    if(!displayCompleted){
      if (!openAnswer) {
        setOpenAnswer(true);
        setButtonLabel("Next question");
      } else {
        setOpenAnswer(false);
        setButtonLabel("Show answer");
        if (index + 1 < quiz.questions.length) {
          setIndex((prev) => prev + 1);
        } else {
          setDisplayCompleted(true);
        }
      }
    }
  };

  const handleBackClick =()=>{
    if(index > 0) setIndex(prev=>prev-1)
  }

  return {buttonLabel, index, openAnswer, displayCompleted, handleButtonClick,handleBackClick}
};
