import { encode, decode } from "js-base64";
import { wrapMessage } from "./wrapMessage";
import { Role, Status } from "@/typings";

export const base64Decode = (content: string) => {
  const result = decode(content);

  const input = wrapMessage(
    Role.User,
    {
      type: "text",
      content: content,
    },
    Status.Success
  );

  const output = wrapMessage(
    Role.Assistant,
    {
      type: "text",
      content: result,
    },
    Status.Success
  );
  return [input, output];
};
