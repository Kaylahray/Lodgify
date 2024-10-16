import { useEffect, useState } from "react";

import { conversations } from "./messages";

// eslint-disable-next-line react/prop-types
export const Conversations = ({ currentId = 1, open }) => {
  const [ready, setReady] = useState(false);
  useEffect(() => {
    !ready && open(conversations[0]);
    setReady(true);
  }, [open, ready]);

  return (
    <div className="flex flex-col gap-2">
      {conversations.map((e) => (
        <div
          key={e.id}
          onClick={() => open(e)}
          className={`flex flex-row gap-2 ${
            currentId === e.id ? " bg-gray-100" : ""
          } hover:bg-gray-50 p-2 rounded-xl cursor-pointer overflow-x-hidden`}
        >
          <div className="flex justify-start gap-2 overflow-x-hidden items-around">
            <div className="overflow-hidden rounded-full w-11 h-11">
              <img src={e.avatar} className="w-11 h-11" />
            </div>
            <div className="flex flex-col justify-around name-group">
              <div className="flex justify-between w-full">
                <h4 className="font-medium leading-3">{e.sender}</h4>
                <span className="text-[0.60rem] text-gray-400">
                  {e.createdAt}
                </span>
              </div>
              <p className="mr-5 overflow-hidden text-xs leading-3 text-gray-400 max-w-40 whitespace-nowrap text-ellipsis">
                {e.text}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
