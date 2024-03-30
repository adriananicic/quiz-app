'use server'

export const editQuizById = async (quizData:{name:string,questionIds:number[]}, id:number) => {
    try {
      const response = await fetch(`https://quiz-server-nh79.onrender.com/quiz/${id}`, {
        method: 'PUT',
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


  
  