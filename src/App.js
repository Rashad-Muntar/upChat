import logo from "./logo.svg";
import "./App.css";
import NewChat from "./Components/newChat";

function App() {
  const coverStyle =
    "rounded-md  w-[400px] h-[600px] bg-purple bg-gradient-to-r from-green to-blue shadow-lg shadow-gray flex";
  return <div className={coverStyle}>
    <NewChat />
  </div>;
}

export default App;
