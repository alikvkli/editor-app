import React, { useState, useEffect, useRef } from "react";
import { collection, addDoc, onSnapshot, serverTimestamp, query, orderBy } from "firebase/firestore";
import { firestore } from "../firebase";
import Message from "./message";
import { useAppDispatch, useAppSelector } from "../hooks";
import { _doLogin, _doLogout } from "../features/auth";
import { IoSend } from "react-icons/io5"
import { handleEnterPressed } from "../utils";
import { _setMessages } from "../features/message";

interface Message {
    id: string;
    text: string;
    sender: {
        username: string;
        photoURL: string;
        id: string;
    };
}

const Chat: React.FC = () => {
    const { user } = useAppSelector(state => state.auth);
    const { messages } = useAppSelector(state => state.message)
    const dispatch = useAppDispatch();
    const [messageText, setMessageText] = useState("");
    const messagesCollectionRef = collection(firestore, "messages");
    const messagesRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const q = query(messagesCollectionRef, orderBy('timestamp'));

        const unsubscribe = onSnapshot(q, (snapshot) => {
            const messagesData = snapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data(),
            })) as Message[];
            dispatch(_setMessages(messagesData));
            if (messagesRef.current) {
                messagesRef.current.scrollTo({
                    top: (messagesRef.current.scrollHeight),
                    behavior: "smooth"
                })

            }
        });

        return () => {
            unsubscribe();
        };
    }, []);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setMessageText(e.target.value);
    };

    const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (messageText.trim() !== "") {
            await addDoc(messagesCollectionRef, {
                text: messageText,
                sender: {
                    id: user?.uid,
                    photoURL: user?.photoURL,
                    username: user?.displayName
                },
                timestamp: serverTimestamp(),
            });
            setMessageText("");
            if (messagesRef.current) {
                messagesRef.current.scrollTo({
                    top: (messagesRef.current.scrollHeight),
                    behavior: "smooth"
                })
            }
        }
    };




    return (
        <div className="bg-white h-custom  flex flex-col shadow-md p-4">
            <div className="h-full flex flex-col flex-1">
                <div ref={messagesRef} className="flex flex-col gap-2 overflow-y-auto">
                    {messages?.map((message) => (
                        <Message key={message.id} message={message} />
                    ))}
                </div>

                <div className="mt-auto w-full">
                    <form className="flex items-center" onSubmit={handleFormSubmit}>
                        <input
                            onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) => handleEnterPressed(e, handleFormSubmit)}
                            className="w-full bg-[#e8eaed] h-[36px] rounded-full p-4 text-sm   focus:outline-0"
                            placeholder="Aa..."
                            value={messageText}
                            onChange={handleInputChange}
                        />
                        <button disabled={messageText.length === 0} className="hover:bg-zinc-300 p-2 disabled:cursor-not-allowed hover:rounded-full">
                            <IoSend color={messageText.length === 0 ? "#6da8f4" : "#1877f2"} size={28} />
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Chat;
