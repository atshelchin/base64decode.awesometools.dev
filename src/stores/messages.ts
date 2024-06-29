import { atom } from "xoid";
import type { Message } from "@/typings";

const getLocalStorage = (key: string) => {
  try {
    return JSON.parse(localStorage.getItem(key) ?? "[]");
  } catch (e) {
    return [];
  }
};

const setLocalStorage = (key: string) => (state: Message[]) =>
  localStorage.setItem(key, JSON.stringify(state));

export const MessagesModel = (initMessages: Message[]) =>
  atom(initMessages, (a) => ({
    append: (messages: Message[]) => a.update((s) => [...s, ...messages]),
    clear: () => a.set([]),
  }));

export const $messagesOfDecode = MessagesModel(
  getLocalStorage("messagesOfDecode") || []
);
export const $messagesOfEncode = MessagesModel(
  getLocalStorage("messagesOfEncode") || []
);

$messagesOfDecode.subscribe(setLocalStorage("messagesOfDecode"));
$messagesOfEncode.subscribe(setLocalStorage("messagesOfEncode"));
