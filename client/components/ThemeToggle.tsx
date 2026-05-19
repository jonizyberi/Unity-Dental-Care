"use client";

import { useTheme } from "next-themes";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export default function ThemeToggle({ children }: Props) {
  const { theme, setTheme } = useTheme();

  return (
    <>
      {children}

      <button
        onClick={() =>
          setTheme(theme === "dark" ? "light" : "dark")
        }
        className="fixed bottom-6 left-6 px-4 py-2 bg-white/10 rounded"
      >
        Toggle
      </button>
    </>
  );
}