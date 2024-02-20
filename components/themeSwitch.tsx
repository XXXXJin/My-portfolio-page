"use client";

import React, { useEffect, useState } from "react";
import { BsSun } from "react-icons/bs";
import { BsMoon } from "react-icons/bs";

type Theme = "light" | "dark" | null;

export default function ThemeSwitch() {
  const [theme, setTheme] = useState<Theme>(null);
  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
      window.localStorage.setItem("theme", "dark");
      document.documentElement.classList.add("dark");
    } else {
      setTheme("light");
      window.localStorage.setItem("theme", "light");
      document.documentElement.classList.remove("dark");
    }
  };

  useEffect(() => {
    const localStorageTheme = window.localStorage.getItem(
      "theme"
    ) as Theme | null;
    if (localStorageTheme) {
      localStorageTheme === "dark"
        ? document.documentElement.classList.add("dark")
        : document.documentElement.classList.remove("dark");
      setTheme(localStorageTheme);
    } else {
      setTheme("light");
      document.documentElement.classList.remove("dark");
    }
  }, []);

  return (
    theme && (
      <button
        onClick={() => toggleTheme()}
        className="fixed bottom-10 right-10 bg-white w-12 h-12 bg-opacity-70 backdrop-blur-lg border-white border-opacity-40 shadow-xl rounded-full flex items-center justify-center hover:scale-110 transition-all"
      >
        {theme === "light" ? <BsSun /> : <BsMoon />}
      </button>
    )
  );
}
