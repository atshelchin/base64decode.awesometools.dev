import { encode, decode } from "js-base64";
import { wrapMessage } from "./wrapMessage";
import { Role, Status } from "@/typings";

export const base64Encode = (content: string) => {
  const result = encode(content);

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
