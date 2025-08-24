import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import Videos from "./components/Videos";
import Links from "./components/Links";

const App: React.FC = () => {
  return (
    <>
      <Header />
      <Main />
      <Videos />
      <Links />
    </>
  );
};

export default App;
