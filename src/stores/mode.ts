import { atom } from "xoid";

export const $mode = atom("decode", (a) => ({
  toggle: () => {
    if (a.value == "decode") {
      a.set("encode");
    } else {
      a.set("decode");
    }
  },
}));
