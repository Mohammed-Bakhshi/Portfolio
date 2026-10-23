import type { ColorMode } from "../hooks/useColorMode.ts";
import "./ThemeToggle.css";

type ThemeToggleProps = {
  mode: ColorMode;
  onToggle: () => void;
};

export function ThemeToggle({ mode, onToggle }: ThemeToggleProps) {
  return (
    <button className="theme-toggle" type="button" onClick={onToggle}>
      {mode === "dark" ? "Light" : "Dark"}
    </button>
  );
}
