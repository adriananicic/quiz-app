"use server";
export const deleteQuiz = async (quizId: number) => {
  try {
    const response = await fetch(`http://localhost:4000/quiz/${quizId}`, {
      method: "DELETE",
    });

    if (!response.ok) {
      throw new Error("Failed to delete quiz");
    }

    console.log("Quiz deleted successfully");
  } catch (error) {
    console.error("Error deleting quiz:", error);
    throw error;
  }
};
