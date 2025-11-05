import React, { useCallback, useContext } from "react";
import Input from "./Input";
import UserChat from "./UserChat";
import UserContext from "../context/User/userContext";

function Home() {
  const context = useContext(UserContext);
  const { chat, setchat } = context;
  return (
    <div className="bg-gray-800 w-screen overflow-hidden box-border flex flex-col   items-center justify-center">
      <div className="h-screen overflow-auto w-full flex justify-center">
        <div className="w-[50vw]">
          {chat.map((c, i) => {
            return <UserChat key={i} chat={c} />;
          })}
        </div>
      </div>
      <div className="fixed bottom-5 w-[50vw]">
        <div className=" ">
          <Input />
        </div>
      </div>
    </div>
  );
}

export default Home;
