import "./App.css";
import { ThemeProvider } from "./contexts/ThemeContext";
import SEOHead from "./components/SEOHead";
import Header from "./components/Header";
import Main from "./components/Main";
import TechStack from "./components/TechStack";
// import Projects from "./components/Projects";
// import Testimonials from "./components/Testimonials";
import Videos from "./components/Videos";
import Links from "./components/Links";

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <SEOHead />
      <Header />
      <Main />
      <TechStack />
      {/* <Projects /> */}
      {/* <Testimonials /> */}
      <Videos />
      <Links />
    </ThemeProvider>
  );
};

export default App;
