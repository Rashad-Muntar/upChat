import React from "react";

function NewChat() {
  const styles = {
    form: "self-end flex w-[100%] justify-center py-[10px]",
    input: "w-[70%] rounded-md px-[10px] focus:outline-none ",
    button: "w-[20%] bg-white ml-[10px] rounded-md color-gray",
  };
  return (
    <form className={styles.form}>
      <input
        type="text"
        placeholder="Message"
        className={styles.input}
        autoFocus={true}
      />
      <button className={styles.button}>Send</button>
    </form>
  );
}

export default NewChat;
