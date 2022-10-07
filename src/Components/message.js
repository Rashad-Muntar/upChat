import React from "react";
import { FaUserCircle } from "react-icons/fa";
import { useSelector } from "react-redux";

const styles = {
  wrapper: "flex mb-[10px]",
  text: `h-max bg-gradient-to-r from-green to-blue 
  rounded-bl-2xl text-xs rounded-tr-2xl flex p-[5px] text-white items-center`,
  textReceived: `h-max bg-gray 
  rounded-bl-2xl text-xs rounded-tr-2xl flex p-[5px] text-white items-center`,
  sent: `text-white flex-row-reverse text-end float-right rounded-bl-full`,
  received: `text-black float-left rounded-br-full`,
  name: "text-green",
  nameReceived: "text-gray",
};

function Message({ name, text }) {
  const currentUser = useSelector((state) => state.user);
  const user = name === currentUser.username;

  const messageClass = user ? `${styles.sent}` : `${styles.received}`;

  return (
    <div className={`${styles.wrapper} ${messageClass}`}>
      <div>
        <FaUserCircle
          fontSize="40px"
          style={{ color: user ? "green" : "gray" }}
        />
        <small className={user ? styles.name : styles.nameReceived}>{name}</small>
      </div>
      <div className={user ? styles.text : styles.textReceived}>{text}</div>
    </div>
  );
}

export default Message;
