import "./App.css";
import { useSelector } from "react-redux";
import NewChat from "./Components/newChat";
import ChatList from "./Components/chatList";
import NewUser from "./Components/newUser";

function App() {
  const currentUser = useSelector((state) => state.user);
  const coverStyle =
    "rounded-md overflow-hidden sm:w-[400px] md:w-[100%] h-[600px] bg-purple bg-gradient-to-r from-green to-blue shadow-lg shadow-gray flex flex-col";
  return (
    <>
      <NewUser />
      {currentUser.username !== "" ? (
        <div className={coverStyle}>
          <ChatList />
          <NewChat />
        </div>
      ): <p>PLEASE ENTER YOUR NAME TO OPEN CHAT</p>}
    </>
  );
}

export default App;
