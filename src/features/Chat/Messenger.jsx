import {
  FaEllipsisH,
  FaRegPaperPlane,
  FaRegSmile,
} from "react-icons/fa";
import {
  buildMessage,
  messages as defaultMessages,
} from "./messages";
import { useEffect, useRef, useState } from "react";

import { Conversations } from "./Conversations";
import { FaPaperclip } from "react-icons/fa6";
import { Message } from "./Message";

export const Messenger = () => {
  const [messages, sendMessage] = useState(defaultMessages);
  const [conversation, setConversation] = useState({});
  const bottomRef = useRef(null);
  const inputRef = useRef(null);
  const formRef = useRef(null);

  useEffect(() => {
    if (bottomRef.current) {
      bottomRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  const handleSubmit = (e) => {
    e?.preventDefault();
    const formData = new FormData(formRef.current);
    const form = Object.fromEntries(formData.entries());

    if (form.message.trim().length < 1) {
      inputRef.current.value = "";
      return;
    }
    sendMessage([...messages, buildMessage(form.message, messages)]);

    inputRef.current.value = "";
  };

  const openConversation = (e) => {
    setConversation(e);
    sendMessage([
      ...defaultMessages,
      buildMessage(e.text, defaultMessages, e.sender),
    ]);
  };

  return (
    <div className="grid grid-cols-8 gap-2">
      <div className="col-span-2">
        <Conversations
          open={openConversation}
          currentId={conversation.id}
        />
      </div>
      <div className="col-span-4">
        <div className="w-full p-4 bg-gray-100 rounded-xl">
          <div className="flex items-center justify-between mb-5 chat-header">
            <div className="flex justify-start gap-2 items-between">
              <div className="overflow-hidden rounded-full w-9 h-9">
                <img src={conversation.avatar} />
              </div>
              <div className="flex flex-col justify-around name-group">
                <h4 className="font-medium leading-3">
                  {conversation.sender}
                </h4>
                <p className="text-xs leading-3 text-gray-400">
                  last seen recently
                </p>
              </div>
            </div>
            <button className="flex items-center justify-center w-8 h-8 bg-white rounded-md cursor-pointer">
              <FaEllipsisH size={10} />
            </button>
          </div>
          <div className="max-h-[70vh] overflow-y-auto">
            <div className="flex justify-center w-full pt-5">
              <div className="px-2 text-sm text-center text-gray-400 bg-white rounded-md w-fit">
                Today, June 19
              </div>
            </div>
            <div className="flex flex-col gap-5 my-5 messages">
              {messages.map((e) => (
                <Message key={e.id} message={e} />
              ))}
            </div>
            <div ref={bottomRef} />
          </div>
          <form
            ref={formRef}
            method="post"
            onSubmit={handleSubmit}
            className="relative z-10 flex items-center gap-3 p-3 bg-white rounded-xl"
          >
            <div className="flex items-center flex-1 rounded-lg bg-gray-50 input">
              <div className="emoji">
                <button
                  type="button"
                  className="flex items-center justify-center w-8 h-8 cursor-pointer"
                >
                  <FaRegSmile size={15} />
                </button>
              </div>
              <div className="relative flex-1 message-input-group">
                <textarea
                  className="left-0 right-0 z-10 self-center w-full overflow-y-auto text-sm bg-transparent border-0 resize-none focus-visible:outline-none focus:ring-0 focus:border-0 message-input"
                  ref={inputRef}
                  name="message"
                  placeholder="Type a message.."
                  onKeyUp={(e) => {
                    e.key === "Enter" &&
                      !e.shiftKey &&
                      handleSubmit(e);
                  }}
                ></textarea>
              </div>
              <div className="attachement">
                <button
                  type="button"
                  className="flex items-center justify-center w-8 h-8 cursor-pointer"
                >
                  <FaPaperclip size={15} />
                </button>
              </div>
            </div>
            <div className="send-btn w-fit">
              <button
                type="submit"
                className="flex items-center justify-center w-8 h-8 bg-[#E7F68E] rounded-lg cursor-pointer"
              >
                <FaRegPaperPlane size={15} />
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="col-span-2">sss</div>
    </div>
  );
};
