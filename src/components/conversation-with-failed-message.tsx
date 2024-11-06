import React, { useEffect, useRef, useState } from 'react';

import { userMessages, assistantMessages } from "./messages";

import MessageCard from "./message-card";

import { useAtom } from "@xoid/react";
import { $messagesOfDecode, $messagesOfEncode } from "@/stores/messages";
import { $mode } from "@/stores/mode";

export default function Component() {
  const messagesOfDecode = useAtom($messagesOfDecode);
  const messagesOfEncode = useAtom($messagesOfEncode);

  const mode = useAtom($mode);
  const messages: Array<{
    role: "user" | "assistant";
    message: React.ReactNode;
    status?: "success" | "failed";
  }> = [
      {
        role: "user",
        message: userMessages[0],
        status: "success",
      },
      {
        role: "assistant",
        message: assistantMessages[1],
        status: "success",
      },
      {
        role: "user",
        message: userMessages[1],
        status: "success",
      },
      {
        role: "assistant",
        message: assistantMessages[0],
        status: "success",
      },
      {
        role: "user",
        message: userMessages[1],
        status: "success",
      },
      {
        role: "assistant",
        message: assistantMessages[0],
        status: "failed",
      },
      {
        role: "user",
        message: userMessages[1],
        status: "success",
      },
      {
        role: "assistant",
        message: assistantMessages[0],
        status: "failed",
      },
      {
        role: "user",
        message: userMessages[1],
        status: "success",
      },
      {
        role: "assistant",
        message: assistantMessages[0],
        status: "failed",
      },
    ];

  const chatContainerRef = useRef(null);

  // 滚动到底部的函数
  const scrollToBottom = () => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  };

  // 在组件初次渲染和每次消息更新后滚动
  useEffect(() => {
    scrollToBottom();
  }, [messagesOfEncode, messagesOfDecode]);

  return (
    <div className="flex  flex-col gap-4 px-1 overflow-y-auto overflow-x-hidden" ref={chatContainerRef}>
      {mode == "decode" &&
        messagesOfDecode.map(({ role, message, status }, index) => (
          <MessageCard
            key={index}
            attempts={index === 1 ? 2 : 1}
            avatar={
              role === "assistant"
                ? "https://nextuipro.nyc3.cdn.digitaloceanspaces.com/components-images/avatar_ai.png"
                : "https://d2u8k2ocievbld.cloudfront.net/memojis/male/6.png"
            }
            currentAttempt={index === 1 ? 2 : 1}
            message={message}
            position={role == 'user' ? 'right' : 'left'}
            messageClassName={
              role === "user" ? "dark:bg-[#3d6a97] bg-[#95ec69]   text-content3-foreground" : "light:bg-gray-50"
            }
            showFeedback={role === "assistant"}
            status={status}
          />
        ))}

      {mode == "encode" &&
        messagesOfEncode.map(({ role, message, status }, index) => (
          <MessageCard
            key={index}
            attempts={index === 1 ? 2 : 1}
            avatar={
              role === "assistant"
                ? "https://nextuipro.nyc3.cdn.digitaloceanspaces.com/components-images/avatar_ai.png"
                : "https://d2u8k2ocievbld.cloudfront.net/memojis/male/6.png"
            }
            currentAttempt={index === 1 ? 2 : 1}
            message={message}
            position={role == 'user' ? 'right' : 'left'}
            messageClassName={
              role === "user" ? "bg-[#95ec69] dark:bg-[#3d6a97]  text-content3-foreground" : "light:bg-gray-50"
            }
            showFeedback={role === "assistant"}
            status={status}
          />
        ))}
    </div>
  );
}
