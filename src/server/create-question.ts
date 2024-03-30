"use server"


export const createQuestion = async (question: {question:string, answer:string}) => {
    try {
      const response = await fetch(`https://quiz-server-nh79.onrender.com/question`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(question),
      });
  
      if (!response.ok) {
        throw new Error('Failed to create a new question');
      }
  
      console.log('New question created successfully');
      console.log(response)
      return response.json()
    } catch (error) {
      console.error('Error creating a new question:', error);
      throw error;
    }

  };
  
