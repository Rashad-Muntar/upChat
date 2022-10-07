import React, { useState, useEffect, useRef } from "react";
import "firebase/firestore";
import { db } from "../firebase";
import {
  collection,
  query,
  onSnapshot,
  orderBy,
  limitToLast,
} from "firebase/firestore";
import Message from "./message";

function ChatList() {
  const [msgs, setMsgs] = useState([]);
  const [chatLimit, setChatLmimt] = useState(10);
  const [isLoading, setIsLoading] = useState(false);

  const styles = {
    wrapper:
      "bg-white box-border  m-[3px] scrollbar-hide overflow-scroll w[100%] h-[93%] rounded-tl-md rounded-tr-md p-[15px]  flex flex-col",
  };
  const scrollDown = useRef();

  useEffect(() => {
    const ref = query(
      collection(db, "messages"),
      orderBy("timestamp"),
      limitToLast(chatLimit)
    );
    setIsLoading(true);
    const unsubscribe = onSnapshot(ref, (querySnapshot) => {
      let messages = [];
      querySnapshot.forEach((doc) => {
        messages.push({ ...doc.data(), id: doc.id });
      });
      setMsgs(messages);
    });
    scrollDown.current.scrollIntoView({ behavior: "smooth" });
    setIsLoading(false);
    return () => unsubscribe();
  }, [chatLimit]);

  const handleScroll = (e) => {
    let element = e.target;
    if (element.scrollTop === 0) {
      setChatLmimt(chatLimit + 2);
    }
  };

  return (
    <>
      <div className={styles.wrapper} onScroll={handleScroll}>
        <span ref={scrollDown} />
        <small>{isLoading && "Loading..."}</small>
        {msgs &&
          msgs.map((chat, index) => (
            <Message key={index} text={chat.text} name={chat.name} />
          ))}
      </div>
    </>
  );
}

export default ChatList;
