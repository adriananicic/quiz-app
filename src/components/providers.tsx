"use client";
import React, { ReactNode } from "react";
import { Dialog, DialogProvider } from "./DIalogProvider";
import { ThemeProvider } from "./Theme/ThemeProvider";

export const Providers = ({ children }: { children: ReactNode }) => {
  return (
    <DialogProvider>
      <ThemeProvider>{children}</ThemeProvider>
      <Dialog />
    </DialogProvider>
  );
};
