import classNames from "classnames";
import React, { FC } from "react";
import { Spinner } from "./Spinner";

interface IButtonProps {
  label: string;
  onClick: () => void;
  disabled?: boolean;
  loading?: boolean;
  className?: string;
  submit?: boolean;
}

export const Button: FC<IButtonProps> = ({
  className,
  disabled,
  label,
  loading,
  onClick,
  submit,
}) => {
  if (loading) return <Spinner />;

  return (
    <button
      onClick={onClick}
      type={submit ? "submit" : undefined}
      disabled={disabled}
      className={classNames(
        className,
        !className && "bg-neutral-medium",
        "w-full h-10 rounded-lg p-3 px-4  text-neutral flex items-center justify-center",
        "hover:scale-[102%] active:scale-[98%] duration-150 transition-all "
      )}
    >
      {label}
    </button>
  );
};
