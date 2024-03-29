'use server'
export const getQuizById = async (quizId:number) => {
    try {
        const response = await fetch(`http://localhost:4000/quiz/${quizId}`);
        if (!response.ok) {
            throw new Error("Failed to fetch quiz");
        }
        const data = await response.json();
        return data
    } catch (error) {
        console.error("Error fetching quiz:", error);
    } finally {
    }
};