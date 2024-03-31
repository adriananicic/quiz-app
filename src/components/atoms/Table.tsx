import classNames from "classnames";
import React, { FC, ReactNode } from "react";

const TableHeader = ({
  children,
  right,
}: {
  children: ReactNode;
  right?: boolean;
}) => (
  <th
    className={classNames(
      right ? "text-right" : "text-left",
      "flex-1 pt-3 pb-2 capitalize px-3"
    )}
  >
    {children}
  </th>
);

const TableRow = ({
  children,
  header,
}: {
  children: ReactNode;
  header?: boolean;
}) => (
  <tr
    className={classNames(
      "px-3 flex items-center border-t border-t-background",
      "cursor-pointer",
      header ? "bg-transparent" : "bg-transparent hover:bg-neutral-weak"
    )}
  >
    {children}
  </tr>
);

const TableData = ({
  children,
  right,
  onClick,
}: {
  children: ReactNode;
  right?: boolean;
  onClick?: () => void;
}) => (
  <td
    onClick={onClick}
    className={classNames(
      right ? "text-right" : "text-left",
      "flex-1 py-4 px-3"
    )}
  >
    {children}
  </td>
);

type TableObject = { [key: string]: any };

interface ITableProps {
  objects: TableObject[];
  titles: Record<keyof TableObject, string | undefined>;
  onClick?: (object: TableObject) => void;
  actionRow?: (object: TableObject) => ReactNode;
  loading?: boolean;
}

export const Table: FC<ITableProps> = ({
  objects,
  titles,
  onClick,
  actionRow,
  loading,
}) => {
  const titleKeys = Object.keys(titles);

  if (loading) return <p className="text-xl text-info">Loading...</p>;

  return (
    <div className="w-full text-neutral rounded-xl  border-2 border-info-weak   shadow-xl overflow-hidden border-collapse">
      <table className="w-full mt-[-1px]">
        <thead>
          <TableRow header>
            {titleKeys.map((title, i) => (
              <TableHeader key={i}> {title} </TableHeader>
            ))}
            {actionRow && <TableHeader right> Actions </TableHeader>}
          </TableRow>
        </thead>
        <tbody>
          {objects
            .sort((a, b) => (a[titleKeys[0]] > b[titleKeys[0]] ? 1 : -1))
            .map((object, i) => {
              return (
                <TableRow key={i}>
                  {titleKeys.map((title, j) => (
                    <TableData
                      key={j}
                      onClick={() => {
                        onClick && onClick(object);
                      }}
                    >
                      {object[title]}
                    </TableData>
                  ))}
                  {actionRow && (
                    <TableData right> {actionRow(object)} </TableData>
                  )}
                </TableRow>
              );
            })}
        </tbody>
      </table>
    </div>
  );
};
