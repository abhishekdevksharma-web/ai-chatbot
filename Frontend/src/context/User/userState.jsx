import { useState } from "react";
import UserContext from "./userContext";

function UserState(props) {
  const [chat, setchat] = useState([]);
  const [isAiResponding, setisAiResponding] = useState(false);
  const [userChat, setUserChat] = useState("");
  const [userAiChat, setUserAiChat] = useState("");

  const userMessage = async (data) => {
    try {
      const res = await fetch(`${import.meta.env.VITE_CHAT_BOT_API_URL}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ data }),
      });
      const output = await res.json();
      const chunkOfData = output.split("```");

      return chunkOfData;
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <UserContext.Provider
      value={{
        userMessage,
        userChat,
        setUserChat,
        userAiChat,
        setUserAiChat,
        chat,
        setchat,
        isAiResponding,
        setisAiResponding,
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
}

export default UserState;
