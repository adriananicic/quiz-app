"use server"
export const getQuizzes = async () => {
    try {
      const response = await fetch('http://localhost:4000/quiz');
  
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
  
      const data = await response.json();
      console.log('Quiz data:', data);
      return data; 
    } catch (error) {
      console.error('There was a problem with the fetch operation:', error);
      throw error; 
    }
  };
  