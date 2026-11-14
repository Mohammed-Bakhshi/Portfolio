import { useState } from "react";

const storageKey = "portfolio-theme";

export type ColorMode = "light" | "dark";

function readMode(): ColorMode {
  return localStorage.getItem(storageKey) === "light" ? "light" : "dark";
}

export function useColorMode() {
  const [mode, setMode] = useState<ColorMode>(readMode);

  const toggle = () => {
    setMode((current) => {
      const next = current === "dark" ? "light" : "dark";
      localStorage.setItem(storageKey, next);
      return next;
    });
  };

  return { mode, toggle };
}
