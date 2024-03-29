"use server"

import { Question } from "@/types";

export const createQuestion = async (question: {question:string, answer:string}) => {
    try {
      const response = await fetch('http://localhost:4000/question', {
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
  
