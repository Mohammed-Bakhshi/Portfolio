import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import Switch from "@mui/material/Switch";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import type { ColorMode } from "../hooks/useColorMode.ts";
import "./ThemeToggle.css";

type ThemeToggleProps = {
  mode: ColorMode;
  onToggle: () => void;
};

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: { main: "#2dd4bf" },
  },
});

const lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: { main: "#14b8a6" },
  },
});

export function ThemeToggle({ mode, onToggle }: ThemeToggleProps) {
  const muiTheme = mode === "dark" ? darkTheme : lightTheme;

  return (
    <ThemeProvider theme={muiTheme}>
      <Switch
        className="theme-switch"
        checked={mode === "dark"}
        onChange={onToggle}
        icon={<LightModeOutlinedIcon fontSize="small" />}
        checkedIcon={<DarkModeOutlinedIcon fontSize="small" />}
        inputProps={{ "aria-label": "Toggle colour mode" }}
      />
    </ThemeProvider>
  );
}
