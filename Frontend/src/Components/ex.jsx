import React, { useState } from "react";

function ChatApp() {
  const [chat, setChat] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSend = async () => {
    const userMsg = { user: "Hello!", ai: "" };
    setChat([...chat, userMsg]);
    setLoading(true);

    // Simulate API delay (AI thinking)
    setTimeout(() => {
      const aiMsg = { user: "Hello!", ai: "Hi Abhishek 👋" };
      setChat((prev) => [...prev.slice(0, -1), aiMsg]);
      setLoading(false);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center p-6">
      <div className="w-full max-w-md space-y-3">
        {chat.map((msg, i) => (
          <div key={i} className="p-3 rounded-lg bg-gray-800">
            <p>
              <b>User:</b> {msg.user}
            </p>
            <p>
              <b>AI:</b> {msg.ai}
            </p>
          </div>
        ))}

        {loading && <TypingDots />}
      </div>

      <button
        onClick={handleSend}
        className="mt-6 bg-purple-600 hover:bg-purple-700 px-4 py-2 rounded-lg"
      >
        Send
      </button>
    </div>
  );
}

function TypingDots() {
  return (
    <div className="flex justify-start items-center space-x-1 p-3">
      <div className="w-2 h-2 bg-white rounded-full animate-bounce [animation-delay:-0.3s]"></div>
      <div className="w-2 h-2 bg-white rounded-full animate-bounce [animation-delay:-0.15s]"></div>
      <div className="w-2 h-2 bg-white rounded-full animate-bounce"></div>
    </div>
  );
}

export default ChatApp;
