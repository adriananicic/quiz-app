import classNames from "classnames";
import React, { FC, useEffect, useRef, useState } from "react";

interface IDropdownProps {
  title: string;
  options: any[];
  setSelected: (selectedIds: number[]) => void;
}

export const Dropdown: FC<IDropdownProps> = ({
  title,
  options,
  setSelected,
}) => {
  const clickRef = useRef<HTMLDivElement>(null);

  const [open, setOpen] = useState<boolean>(false);
  const [selectedIds, setSelectedIds] = useState<number[]>([]);

  const handleOptionChange = (id: number) => {
    if (selectedIds.includes(id)) {
      const newIds = selectedIds.filter((selectedId) => selectedId !== id);
      setSelectedIds(newIds);
      setSelected(newIds);
    } else {
      const newIds = [...selectedIds, id];
      setSelectedIds(newIds);
      setSelected(newIds);
    }
  };

  //Handle closing of the Dropdown when clicking outisde
  const handleClickOutside = (e: MouseEvent) => {
    if (clickRef.current && !clickRef.current.contains(e.target as Node)) {
      setOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);
  //--------------------------------------------------------

  return (
    <div
      ref={clickRef}
      className="w-full div flex flex-col items-center  border-[1px] border-neutral justify-center  gap-2 bg-neutral-medium text-neutral rounded-lg"
    >
      <p
        onClick={() => setOpen((prev) => !prev)}
        className="w-full text-center p-3 cursor-pointer"
      >
        {title}
      </p>
      {open && (
        <div className="w-full flex flex-col ">
          {options.map((option, key) => (
            <div
              onClick={() => handleOptionChange(option.id)}
              className="w-full border-t-[1px] p-2 border-neutral flex items-center justify-between cursor-pointer"
              key={key}
            >
              {option.question}
              <div
                className={classNames(
                  "rounded-xl h-4 w-4 border-[1px] border-neutral ",
                  selectedIds?.includes(option.id)
                    ? "bg-info"
                    : "bg-transparent"
                )}
              ></div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
