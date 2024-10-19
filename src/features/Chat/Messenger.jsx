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
import CaretSelect from "../../components/CaretSelect";
import {
  Close,
  NotePen,
  Info,
  ImageScreen,
  FileText,
  SmallLink,
} from "../../assets/assets";
import ListDocs from "./ListDocs";
import ListLink from "./ListLink";

export const Messenger = () => {
  const [messages, sendMessage] = useState(defaultMessages);
  const [open, setOpen] = useState(true);
  const [conversation, setConversation] = useState({});
  const bottomRef = useRef(null);
  const inputRef = useRef(null);
  const formRef = useRef(null);

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
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
    <>
      <div className="grid grid-cols-8 gap-2 bg-white p-4">
        <div className="col-span-2">
          <div className="max-h-[70vh] overflow-y-auto hide-scrollbar">
            <Conversations
              open={openConversation}
              currentId={conversation.id}
            />
          </div>
        </div>
        <div className={`${open ? "col-span-4" : "col-span-6"}`}>
          <div className="w-full p-4 bg-gray-100 rounded-xl">
            <div className="flex items-center justify-between mb-5 chat-header">
              <div className="flex justify-start gap-2 items-between">
                <button
                  onClick={handleOpen}
                  className="overflow-hidden rounded-full w-9 h-9 cursor-pointer"
                >
                  <img src={conversation.avatar} />
                </button>
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
            <div className="max-h-[50vh] overflow-y-auto hide-scrollbar">
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
        <div
          className={`col-span-2 flex flex-col ${
            !open ? "hidden" : ""
          }`}
        >
          <div className="max-h-[70vh] overflow-y-auto hide-scrollbar">
            <div className="flex flex-col px-2 items-start gap-6 w-full">
              <div className="flex justify-between items-center w-full">
                <h1 className="text-customBlack text-[16px] font-medium leading-[20px]">
                  Profile
                </h1>
                <div className="flex items-center gap-2.5">
                  <CaretSelect btnText="Popular" />
                  <div
                    className="p-1 bg-white cursor-pointer"
                    onClick={handleClose}
                  >
                    <Close />
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-center gap-[17px] self-stretch">
                <img
                  src={conversation.avatar}
                  alt="profile"
                  className="w-14 h-14 rounded-full overflow-hidden"
                />
                <div className="flex flex-col items-center gap-1 self-stretch">
                  <div className="flex gap-1">
                    <div className="flex items-center gap-1">
                      <p className="text-[#0D0E0D] font-lato text-[18px] font-medium leading-[21.6px]">
                        {conversation.sender}
                      </p>
                      <NotePen />
                    </div>
                  </div>
                  <p className="text-[#6E6E6E] text-[12px] font-normal leading-[16.8px]">
                    G011-987654321
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-start gap-3 self-stretch">
                <div className="flex gap-1 items-center">
                  <Info />
                  <p className="text-[#A3A3A3] text-[11px] font-semibold leading-[15.4px] tracking-[0.44px] uppercase">
                    About
                  </p>
                </div>
                <p className="text-[#6E6E6E]text-[14px] font-normal leading-[19.6px]">
                  A frequent traveler who enjoys luxury accommodations
                  and values exceptional customer service.
                </p>
              </div>
              <div className="flex flex-col items-start gap-3 self-stretch">
                <div className="flex justify-between w-full">
                  <div className="flex gap-1 items-center w-full">
                    <ImageScreen />
                    <p className="text-[#A3A3A3] text-[11px] font-semibold leading-[15.4px] tracking-[0.44px] uppercase">
                      Media (17)
                    </p>
                  </div>
                  <span className="text-[#6E6E6E] text-nowrap text-[12px] font-semibold leading-[13.2px] tracking-[0.12px]">
                    Show All
                  </span>
                </div>
                <div className="grid grid-cols-3 gap-1 w-full items-center justify-center">
                  <div className="h-20 w-20 rounded-md bg-yellow-300"></div>
                  <div className="h-20 w-20 rounded-md bg-red-300"></div>
                  <div className="h-20 w-20 rounded-md bg-pink-400"></div>
                  <div className="h-20 w-20 rounded-md bg-blue-400"></div>
                  <div className="h-20 w-20 rounded-md bg-slate-400"></div>
                  <div className="h-20 w-20 rounded-md bg-purple-600"></div>
                </div>
              </div>

              <div className="flex flex-col items-start gap-3 self-stretch">
                <div className="flex justify-between items-center w-full">
                  <div className="flex gap-1">
                    <FileText />
                    <p className="text-[#A3A3A3] text-[11px] font-semibold leading-[15.4px] tracking-[0.44px] uppercase">
                      Documents (8)
                    </p>
                  </div>
                  <span className="text-[#6E6E6E] text-center font-lato text-[12px] font-semibold leading-[13.2px] tracking-[0.12px]">
                    Show All
                  </span>
                </div>
                <div className="flex flex-col items-start gap-4 self-stretch w-full">
                  <ListDocs
                    text="Invoice-240528.pdf"
                    docSize="1.45 mb"
                  />
                  <ListDocs
                    text="Invoice-120328.pdf"
                    docSize="1.49 mb"
                  />
                  <ListDocs
                    text="Invoice-011227.pdf"
                    docSize="2.45 mb"
                  />
                </div>
              </div>
              <div className="flex flex-col items-start gap-3 self-stretch">
                <div className="flex justify-between w-full items-center">
                  <div className="flex gap-1">
                    <SmallLink />
                    <p className="text-[#A3A3A3] text-[11px] font-semibold leading-[15.4px] tracking-[0.44px] uppercase">
                      Links
                    </p>
                  </div>
                  <span className="text-[#6E6E6E] text-center  text-[12px] font-semibold leading-[13.2px] tracking-[0.12px]">
                    Show All
                  </span>
                </div>
                <div className="flex flex-col items-start gap-4 self-stretch">
                  <ListLink
                    text="Summer Staycation PROMO!"
                    url="www.instagram.com"
                  />
                  <ListLink
                    text="Corporate/Group Discounts!"
                    url="www.x.com"
                  />
                  <ListLink
                    text="Corporate/Group Discounts"
                    url="www.x.com"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
