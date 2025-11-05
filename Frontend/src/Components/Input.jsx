import React, { useContext, useEffect, useRef, useState } from "react";
import { Plus, Mic, Send, User, CircleStop } from "lucide-react";
import UserContext from "../context/User/userContext";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";

function Input() {
  const context = useContext(UserContext);
  const { chat, setchat, isAiResponding, setisAiResponding, userMessage } =
    context;

  const [longChar, setlongChar] = useState(false);
  const [recordingState, setrecordingState] = useState({
    isRecording: false,
    placeholder: "Ask anything...",
  });
  const [value, setValue] = useState("");

  async function sendmessage() {
    setchat([...chat, { user: value, ai: " " }]);
    setValue(" ");
    const content = await userMessage(value);
    setchat((prev) => {
      const updated = [...prev];
      updated.at(-1).ai = content;
      return updated;
    });
  }

  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition,
  } = useSpeechRecognition();

  if (!browserSupportsSpeechRecognition) {
    return <span>Browser doesn't support speech recognition.</span>;
  }

  useEffect(() => {
    setValue(transcript);
  }, [transcript]);

  function startRecording() {
    setrecordingState({
      placeholder: "Speak What Do You Search....",
      isRecording: true,
    });

    SpeechRecognition.startListening();
    return () => clearInterval(interval);
  }
  function endRecording() {
    setrecordingState({
      placeholder: "Ask anything...",
      isRecording: false,
    });
    SpeechRecognition.stopListening();
  }

 

  return (
    <div
      className={`p-2 bg-[#2e2e2e] rounded-full shadow-md border ${
        listening ? "border-white animate-glow" : "border-gray-700"
      }`}
    >
      {longChar && (
        <input
          value={value}
          onChange={onchange}
          className="flex-1 px-3 bg-transparent text-gray-200 placeholder-gray-400 resize-none leading-5 "
          type="text"
          placeholder="Ask anything..."
        />
      )}
      <div className="flex justify-center">
        <button className="hover:bg-gray-500 rounded-full text-white cursor-pointer p-3">
          <Plus size={18} color="#ffffff" strokeWidth={1.25} />
        </button>
        <input
          value={value}
          onChange={(e) => setValue(e.target.value)}
          className="flex-1 px-3 bg-transparent text-gray-200 placeholder-gray-400 focus:outline-none resize-none leading-5 "
          type="text"
          placeholder={
            !listening ? "Ask anything..." : "Speak What Do You Search..."
          }
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              sendmessage(e.target.value); 
            }
          }}
          // placeholder={`Typing${".".repeat(dots)}`}
        />
        {!listening ? (
          <button
            onClick={startRecording}
            className="hover:bg-gray-500 rounded-full p-3 cursor-pointer"
          >
            <Mic color="#ffffff" strokeWidth={1.25} size={18} />
          </button>
        ) : (
          <button
            onClick={endRecording}
            className="hover:bg-gray-500 rounded-full p-3 cursor-pointer"
          >
            <CircleStop color="#ffffff" strokeWidth={1.25} size={18} />
          </button>
        )}
        <button
          onClick={(e) => {
            sendmessage();
          }}
          className="hover:bg-gray-500 rounded-full p-3 cursor-pointer"
        >
          <Send color="#ffffff" strokeWidth={1.25} size={18} />
        </button>
      </div>
    </div>
  );
}
export default Input;
