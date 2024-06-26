"use client";

import React from "react";
import ScrollToBottom from "react-scroll-to-bottom";

import ChatAreaHeader from "./chat_area_header";
import MessageAi from "./message_ai";
import MessageUser from "./message_user";
import { EmptyScreen } from "./empty-screen";

const ChatArea = () => {
  return (
    <div className="flex-1 overflow-hidden">
      <div className="h-full w-full overflow-y-auto">
        <ScrollToBottom className="h-full w-full">
        <div className="flex flex-col text-sm h-full">
          <ChatAreaHeader />
          {/* <EmptyScreen /> */}

          <MessageUser />
          <MessageAi />
          <MessageUser />
          <MessageAi />
          <MessageUser />
          <MessageAi />
        </div>
        </ScrollToBottom>
      </div>
    </div>
  );
};

export default ChatArea;
