import React from "react";
import { useAppSelector } from "../hooks";

interface Props {
  message: {
    id: string;
    text: string;
    sender: {
      username: string;
      photoURL: string;
      id: string;
    };
  };
}

const Message: React.FC<Props> = ({ message }) => {
  const { user } = useAppSelector(state => state.auth);
  return (
    <>
      {user?.uid === message.sender.id ? (
        <div className={`flex flex-row-reverse items-center  gap-4`}>
          <div className="shrink-0"><img className="w-[32px] h-[32px] rounded-full" src={message.sender.photoURL} alt={message.sender.username} /></div>
          <div className="bg-[#0084ff] text-white px-4 py-2 rounded-md md:max-w-2xl"><p className="text-md">{message.text}</p></div>
        </div>
      ) : (
        <div className={`flex items-center justify-items-start gap-4`}>
          <div><img className="w-[32px] h-[32px] rounded-full" src={message.sender.photoURL} alt={message.sender.username} /></div>
          <div className="bg-[#e4e6ea] px-4 py-2 rounded-md md:max-w-2xl"><p className="text-md">{message.text}</p></div>
        </div>
      )}
    </>
  );
};

export default Message;
