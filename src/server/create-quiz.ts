'use server'


export const createNewQuiz = async (quizData:{name:string,questionIds:number[]}) => {
    try {
      const response = await fetch('https://quiz-server-nh79.onrender.com/quiz', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(quizData),
      });
  
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
  
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error creating quiz:', error);
      throw error;
    }
    
  };


  
  