"use server";
export const deleteQuiz = async (quizId: number) => {
  try {
    const response = await fetch(`https://quiz-server-nh79.onrender.com/quiz/${quizId}`, {
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
