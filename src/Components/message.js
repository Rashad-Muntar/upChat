import React from "react";
import { FaUserCircle } from "react-icons/fa";

function Message({ name, text }) {
  const styles = {
    wrapper: "flex",
    text: "h-max bg-gradient-to-r from-green to-blue rounded-br-2xl rounded-bl-2xl text-xs rounded-tr-2xl flex p-[5px] text-white items-center"
  };
  return (
    <div className={styles.wrapper}>
      <div>
        <FaUserCircle fontSize="40px" />
        <small>Rashad</small>
      </div>
      <div className={styles.text}>testing message testing message testing message testing messagetesting message testing message testing message testing message</div>
    </div>
  );
}

export default Message;
