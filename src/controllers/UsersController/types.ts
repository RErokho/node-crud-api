import { IncomingMessage } from "http";

export type TGetReqData = (
  request: IncomingMessage
) => Promise<{ [key: string]: any } | null>;
