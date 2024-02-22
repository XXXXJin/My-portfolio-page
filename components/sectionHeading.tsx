import React, { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export default function SectionHeading({ children }: Props) {
  return (
    <h2 className="text-center text-3xl font-medium mb-8 text-gray-900 dark:text-slate-200">
      {children}
    </h2>
  );
}
