import type { Role, TextMessage, FileMessage, Status } from "@/typings";

export const wrapMessage = (
  role: Role,
  message: TextMessage | FileMessage,
  status: Status
) => {
  return {
    role,
    message,
    status,
  };
};
