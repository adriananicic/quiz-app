"use client";
import useDialog from "@/components/DIalogProvider";
import { ToggleTheme } from "@/components/Theme/ToggleTheme";
import { Button } from "@/components/atoms/Button";
import Heading from "@/components/atoms/Heading";
import { Section } from "@/components/atoms/Section";
import { Spinner } from "@/components/atoms/Spinner";
import { Table } from "@/components/atoms/Table";
import { CreateQuizModal } from "@/components/modals/CreateQuizModal";
import { EditQuizModal } from "@/components/modals/EditQuizModal";
import { useLoadQuizzes } from "@/hooks/use-load-quizzes";
import { deleteQuiz } from "@/server/delete-quiz";

export const DashboardPage = () => {
  const { isLoading, quizzes, refetch } = useLoadQuizzes();
  const { setModal } = useDialog();

  const handleEditClick = (quizId: number) => {
    setModal(<EditQuizModal id={quizId} />);
  };

  const handleStartClick = (quizId: number) => {
    window.open(`/showcase/${quizId}`);
  };

  const handleDeleteClick = (quizId: number) => {
    deleteQuiz(quizId);
    refetch();
  };

  const handleCreateQuizClick = () => {
    setModal(<CreateQuizModal />);
  };

  return (
    <Section>
      <Heading
        title="Quiz Dashboard"
        actions={
          <Button
            label="Create new Quiz"
            onClick={() => handleCreateQuizClick()}
          />
        }
      />
      <Table
        objects={quizzes}
        titles={{ name: "name" }}
        actionRow={(quiz) => (
          <div className="flex items-center gap-2">
            <Button
              onClick={() => {
                handleStartClick(quiz.quizId);
              }}
              label="Start"
            />
            <Button
              className="bg-danger"
              onClick={() => {
                handleDeleteClick(quiz.quizId);
              }}
              label="Delete"
            />
          </div>
        )}
        onClick={(quiz) => handleEditClick(quiz.quizId)}
        loading={isLoading}
      />
    </Section>
  );
};
