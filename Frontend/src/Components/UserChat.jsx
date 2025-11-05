import React, { useContext, useState } from "react";
import UserContext from "../context/User/userContext";

function UserChat(props) {
  const context = useContext(UserContext);
  const { isAiResponding, setisAiResponding } = context; 

  return (
    <div className="w-full p-3 flex flex-col gap-4">
      <div className="flex justify-end">
        <div className="bg-gray-500 text-white px-4 py-2 rounded-2xl max-w-xs">
          {props.chat.user}
        </div>
      </div>
      <div className="">
        {/* {isAiResponding ? (
          <div class Name="flex justify-start items-center space-x-1 p-3">
            <div className="w-2 h-2 bg-white rounded-full animate-bounce [animation-delay:-0.3s]"></div>
            <div className="w-2 h-2 bg-white rounded-full animate-bounce [animation-delay:-0.15s]"></div>
            <div className="w-2 h-2 bg-white rounded-full animate-bounce"></div>
          </div>
        ) : (
          <div className="bg-gray-500 text-white px-4 py-2 rounded-2xl max-w-xs">
            {props.chat.ai}
          </div>
        )} */}
        {
          <pre className=" bg-gray-700 text-white px-4 py-2 rounded-2xl text-xs whitespace-pre-wrap  overflow-auto p-3 rounded-lgz">
            {props.chat.ai}
          </pre>
        }
      </div>
    </div>
  );
}

export default UserChat;
