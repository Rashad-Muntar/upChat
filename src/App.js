import "./App.css";
import { useSelector } from "react-redux";
import NewChat from "./Components/newChat";
import ChatList from "./Components/chatList";
import NewUser from "./Components/newUser";

function App() {
  const currentUser = useSelector((state) => state.user);
  const coverStyle =
    "rounded-md overflow-hidden w-[400px] h-[600px] bg-purple bg-gradient-to-r from-green to-blue shadow-lg shadow-gray flex flex-col";
  return (
    <>
      <NewUser />
      {currentUser.username !== null && (
        <div className={coverStyle}>
          <ChatList />
          <NewChat />
        </div>
      )}
    </>
  );
}

export default App;
