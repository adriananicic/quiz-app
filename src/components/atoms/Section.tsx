import React, { ReactNode } from "react";

export const Section = ({ children }: { children: ReactNode }) => {
  return (
    <div className="bg-background sm:p-20 p-2 h-full min-h-screen flex  flex-col gap-5">
      {children}
    </div>
  );
};
