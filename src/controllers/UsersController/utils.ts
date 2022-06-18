import { IncomingMessage } from "http";

import { TGetReqData } from "./types";

export const getReqData: TGetReqData = (request: IncomingMessage) => {
  return new Promise((response, reject) => {
    try {
      let body = "";

      request.on("data", (chunk) => {
        body += chunk.toString();
      });

      request.on("end", () => {
        const json = JSON.parse(body.toString());

        response(json);
      });
    } catch (error) {
      reject(null);
    }
  });
};
