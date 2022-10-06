import React from "react";
import { FaUserCircle } from "react-icons/fa";
import { useSelector } from "react-redux";

const styles = {
  wrapper: "flex",
  text: `h-max bg-gradient-to-r from-green to-blue 
  rounded-bl-2xl text-xs rounded-tr-2xl flex p-[5px] text-white items-center`,
  textReceived: "bg-gray",
  sent: `text-white flex-row-reverse text-end float-right rounded-bl-full`,
  received: `text-black float-left rounded-br-full`,
};

function Message({ name, text }) {
  const currentUser = useSelector((state) => state.user);

  const messageClass =
    name === currentUser.username ? `${styles.sent}` : `${styles.received}`;
  const textClass =
    name === currentUser.username ? `${styles.text}` : `${styles.textReceived}`;

  return (
    <div className={`${styles.wrapper} ${messageClass}`}>
      <div>
        <FaUserCircle fontSize="40px" />
        <small>{name}</small>
      </div>
      <div className={`${styles.text} ${textClass}`}>
        {text}
      </div>
    </div>
  );
}

export default Message;
