import React, { useCallback, useContext, useEffect, useRef } from "react";
import Input from "./Input";
import UserChat from "./UserChat";
import UserContext from "../context/User/userContext";

function Home() {
  const context = useContext(UserContext);
  const { chat, setchat } = context;

  // const divRef = useRef(null);

  // useEffect(() => {
  //   const div = divRef.current;

  //   const handleScroll = () => {
  //     console.log("ScrollTop:", div.scrollTop);
  //     console.log("ScrollHeight:", div.scrollHeight);
  //     console.log("ClientHeight:", div.clientHeight);
  //   };

  //   div.addEventListener("scroll", handleScroll);
  //   return () => div.removeEventListener("scroll", handleScroll);
  // }, []);
  
  return (
    <div className=" w-screen h-screen bg-gray-800 pb-2 overflow-hidden box-border flex flex-col items-center justify-center ">
      <div className="h-screen overflow-auto w-full flex justify-center ">
        <div  className="w-[50vw] ">
          {chat.map((c, i) => {
            return <UserChat key={i} chat={c} />;
          })}
        </div>
      </div>
      <div className="bg-transparent w-[50vw]">
        <div className=" ">
          <Input />
        </div>
      </div>
    </div>
  );
}

export default Home;
