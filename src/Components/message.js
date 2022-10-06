import React from "react";
import { FaUserCircle } from "react-icons/fa";
import { useSelector } from "react-redux";

const styles = {
  wrapper: "flex",
  text: `h-max bg-gradient-to-r from-green to-blue rounded-br-2xl 
  rounded-bl-2xl text-xs rounded-tr-2xl flex p-[5px] text-white items-center`,
  sent: `bg-[#395dff] text-white flex-row-reverse text-end float-right rounded-bl-full`,
  received: `bg-[#e5e5ea] text-black float-left rounded-br-full`,
};

function Message({ name, text }) {
  const currentUser = useSelector((state) => state.user);

  const messageClass =
    name === currentUser.username ? `${styles.sent}` : `${styles.received}`;

  return (
    <div className={`${styles.wrapper} ${messageClass}`}>
      <div>
        <FaUserCircle fontSize="40px" />
        <small>Rashad</small>
      </div>
      <div className={styles.text}>
        testing message testing message testing message testing messagetesting
        message testing message testing message testing message
      </div>
    </div>
  );
}

export default Message;
