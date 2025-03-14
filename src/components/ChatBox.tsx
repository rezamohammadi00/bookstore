
"use client";

import Image from "next/image";
import { useState, useRef } from "react";
import { XCircleIcon } from "@heroicons/react/24/outline";
import { PaperAirplaneIcon } from "@heroicons/react/24/outline";

import ai from "@/public/images/ai.png";
import user from "@/public/images/user.png";

const ChatBox = () => {
    const [messages, setMessages] = useState([
        {
            role: "ai",
            content: "سلام، هرسوالی از هر کتابی داری میتونی از من بپرسی",
        },
        {
            role: "user",
            content: "علیک، چشم",
        },
        {
            role: "ai",
            content: "خب درخدمتم",
        },
        {
            role: "user",
            content: "درمورد شاهزاده کوچولو بگو",
        },

    ]);
    const [inputValue, setInputValue] = useState("");
    const dialogRef = useRef<HTMLDialogElement>(null);


    const handleSendMessage = (e: React.FormEvent) => {
        e.preventDefault();
        if (!inputValue.trim()) return;

        setMessages([...messages, { role: "user", content: inputValue.trim() }]);
        setInputValue("");
        // Here you could add logic to get AI response
    };

    return (
        <>
            <button
                className="btn btn-circle btn-ghost p-2 bg-base-100 shadow-lg hover:bg-base-200 transition-colors"
                onClick={() => dialogRef.current?.showModal()}
            >
                <Image src={ai} alt="AI Assistant" width={32} height={32} />
            </button>

            <dialog ref={dialogRef} id="chat_modal" className="modal modal-bottom sm:modal-middle">
                <div className="modal-box p-0 bg-base-100">
                    {/* Chat Header */}
                    <div className="sticky top-0 bg-base-200 p-4 border-b border-base-300 flex justify-between items-center">
                        <h3 className="text-base font-bold">دستیار هوشمند <span className="text-primary">کتابان</span></h3>
                        <form method="dialog">
                            <button className="btn btn-ghost btn-sm btn-circle">
                                <XCircleIcon className="size-8 text-base-content/70 !text-accent" />
                            </button>
                        </form>
                    </div>

                    {/* Chat Messages */}
                    <div className="p-4 space-y-4 max-h-[60vh] overflow-y-auto">
                        {messages.map((message, index) => (
                            <div
                                key={index}
                                className={`chat ${message.role === "ai" ? "chat-start" : "chat-end"
                                    }`}
                            >
                                <div className="chat-image avatar">
                                    <div className="w-10 rounded-full">
                                        <Image
                                            src={message.role === "ai" ? ai : user}
                                            alt={`${message.role} avatar`}
                                            width={40}
                                            height={40}
                                        />
                                    </div>
                                </div>
                                <div className="chat-bubble text-white">
                                    {message.content}
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Message Input */}
                    <div className="modal-action p-4 border-t border-base-300">
                        <form onSubmit={handleSendMessage} className="flex w-full gap-2">
                            <input
                                type="text"
                                value={inputValue}
                                onChange={(e) => setInputValue(e.target.value)}
                                placeholder="سوال خود را بپرسید..."
                                className="input input-bordered w-full focus:outline-none focus:ring-2 focus:ring-primary"
                            />
                            <button
                                type="submit"
                                className="btn btn-primary btn-circle"
                                disabled={!inputValue.trim()}
                            >
                                <PaperAirplaneIcon className="size-5 rotate-180" />
                            </button>
                        </form>
                    </div>
                </div>
            </dialog>
        </>
    );
};

export default ChatBox;