export enum Role {
  Assistant = "assistant",
  User = "user",
}

export enum Status {
  Success = "success",
  Error = "error",
}

export enum FileType {
  Image = "image",
  Text = "text",
  Audio = "audio",
}

export enum LocationType {
  Local = "local",
  Remote = "remote",
}

export interface LocalFile {
  locationType: LocationType.Local;
  uri: string;
}

export interface RemoteFile {
  locationType: LocationType.Remote;
  uri: string;
}

export type FileLocation = LocalFile | RemoteFile;

export interface FileDetails {
  fileType: FileType;
  fileLocation: FileLocation;
}

export interface FileMessage {
  type: "file";
  content: FileDetails;
}

export interface TextMessage {
  type: "text";
  content: string;
}

export interface Message {
  role: Role;
  message: TextMessage | FileMessage;
  status: Status;
}
