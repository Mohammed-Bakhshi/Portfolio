import { HomePage } from "./pages/HomePage.tsx";
import { useColorMode } from "./hooks/useColorMode.ts";

export function App() {
  const { mode, toggle } = useColorMode();
  return <HomePage mode={mode} onToggle={toggle} />;
}

export default App;
