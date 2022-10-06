import React, { useRef } from "react";
import Message from "./message";

function ChatList() {
  const styles = {
    wrapper: "bg-white m-[3px] w[100%] h-[93%] rounded-tl-md rounded-tr-md p-[15px]",
  };
  const scroll = useRef();
  return (
    <>
      <div className={styles.wrapper}>
        <Message />
      </div>
      <span ref={scroll} />
    </>
  );
}

export default ChatList;
