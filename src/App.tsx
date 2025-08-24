import "./App.css";
import { ThemeProvider } from "./contexts/ThemeContext";
import Header from "./components/Header";
import Main from "./components/Main";
import Videos from "./components/Videos";
import Links from "./components/Links";

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <Header />
      <Main />
      <Videos />
      <Links />
    </ThemeProvider>
  );
};

export default App;
