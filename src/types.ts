
export type Question = { questionId: number; question: string; answer: string; }
export type Quiz = { name: string; quizId: number; questions: Question[]; }