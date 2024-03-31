import classNames from "classnames";
import React, { FC, useEffect, useRef, useState } from "react";
import { Spinner } from "./Spinner";

interface IButtonProps {
  label: string;
  onClick: () => void;
  disabled?: boolean;
  loading?: boolean;
  className?: string;
  submit?: boolean;
  hasConfirmation?: boolean;
}

export const Button: FC<IButtonProps> = ({
  className,
  disabled,
  label,
  loading,
  onClick,
  submit,
  hasConfirmation,
}) => {
  if (loading) return <Spinner />;

  const [insideLabel, setInsideLabel] = useState<string>(label);

  const handleClick = () => {
    if (hasConfirmation) {
      if (insideLabel === "Confirm") {
        onClick();
      }
      setInsideLabel("Confirm");
    } else {
      onClick();
    }
  };

  const clickRef = useRef<HTMLButtonElement>(null);
  const handleClickOutside = (e: MouseEvent) => {
    if (
      clickRef.current &&
      !clickRef.current.contains(e.target as Node) &&
      hasConfirmation
    ) {
      setInsideLabel(label);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <button
      ref={clickRef}
      onClick={handleClick}
      type={submit ? "submit" : undefined}
      disabled={disabled}
      className={classNames(
        className || "bg-neutral-medium",
        "w-full h-10 rounded-lg p-3 px-4  text-neutral flex items-center justify-center",
        "hover:scale-[102%] active:scale-[98%] duration-150 transition-all "
      )}
    >
      {insideLabel}
    </button>
  );
};
