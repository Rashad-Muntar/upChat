import React, { useState, useEffect, useRef } from "react";
import "firebase/firestore";
import { db } from "../firebase";
import { collection, query, onSnapshot, orderBy } from "firebase/firestore";
import Message from "./message";


function ChatList() {
  const [msgs, setMsgs] = useState([]);
  const styles = {
    wrapper: "bg-white m-[3px] w[100%] h-[93%] rounded-tl-md rounded-tr-md p-[15px] flex flex-col",
  };
  const scroll = useRef();

  useEffect(() => {
    const q = query(collection(db, "messages"), orderBy("timestamp"));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      let messages = [];
      querySnapshot.forEach((doc) => {
        messages.push({ ...doc.data(), id: doc.id });
      });
      setMsgs(messages);
    });
    return () => unsubscribe();
  }, []);

  return (
    <>
      <div className={styles.wrapper}>
      { msgs && msgs.map((chat, index) => (
        <Message key={index} text={chat.text} name={chat.name}/>
      ))}
      </div>
      <span ref={scroll} />
    </>
  );
}

export default ChatList;
