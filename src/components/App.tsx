"use client";
import { ThemeProvider } from "next-themes";
import React from "react";
import { ScrollShadow, Tab, Tabs } from "@nextui-org/react";

import ConversationWithFailedMessage from "./conversation-with-failed-message";
import PromptInputWithBottomActions from "./prompt-input-with-bottom-actions";

export default function Component() {
  return (
    <ThemeProvider>
      <div className="flex h-full w-full max-w-full flex-col gap-8">
        <div className="flex w-full flex-wrap items-center justify-center gap-2 border-b-small border-divider pb-2 sm:justify-between">
          <p className="text-base font-medium">Base64Decode</p>
          <Tabs className="justify-center">
            <Tab key="creative" title="Decode" />
            <Tab key="technical" title="Encode" />
          </Tabs>
        </div>
        <ScrollShadow className="flex h-full flex-col">
          <ConversationWithFailedMessage />
        </ScrollShadow>
        <div className="flex flex-col gap-2">
          <PromptInputWithBottomActions />
          <p className="px-2 text-tiny text-default-400">
            Acme AI can make mistakes. Consider checking important information.
          </p>
        </div>
      </div>
    </ThemeProvider>
  );
}
