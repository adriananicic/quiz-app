import React, { FC, useState } from "react";

interface IInputProps {
  label: string;
  onChange: (value: string) => void;
  type?: "text" | "password";
  value?: string;
}

export const TextInput: FC<IInputProps> = ({
  onChange,
  label,
  type,
  value,
}) => {
  return (
    <div className="flex flex-col gap-1 my-2 text-sm text-neutral ">
      <label htmlFor={label}>{label}</label>
      <input
        onChange={(e) => {
          onChange(e.target.value);
        }}
        className="rounded-lg p-2 outline-none text-neutral bg-neutral-medium"
        id={label}
        type={type ?? "text"}
        value={value}
      />
    </div>
  );
};
