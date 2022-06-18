import { ServerResponse } from "http";
import { StatusCode } from "./types";

class ResponseCreator {
  private static responseCreatorInstance: ResponseCreator | null = null;

  private constructor() {}

  public static getRC() {
    if (this.responseCreatorInstance === null) {
      this.responseCreatorInstance = new ResponseCreator();
    }

    return this.responseCreatorInstance;
  }

  status200(response: ServerResponse, data?: {}): void {
    response.statusCode = StatusCode.SUCCESS;

    if (data !== undefined) {
      const json = JSON.stringify(data);

      response.setHeader("Content-Type", "application/json");
      response.end(json);
    } else {
      response.end();
    }
  }

  status201(response: ServerResponse, data?: {}): void {
    response.statusCode = StatusCode.CREATED;

    if (data !== undefined) {
      const json = JSON.stringify(data);

      response.setHeader("Content-Type", "application/json");
      response.end(json);
    } else {
      response.end();
    }
  }

  status204(response: ServerResponse): void {
    response.statusCode = StatusCode.NO_CONTENT;

    response.end();
  }

  status400(response: ServerResponse, message = "Bad Request"): void {
    response.statusCode = StatusCode.BAD_REQUEST;
    response.setHeader("Content-Type", "application/json");

    const jsonMessage = JSON.stringify({
      message,
      statusCode: StatusCode.BAD_REQUEST,
    });

    response.end(jsonMessage);
  }

  status404(response: ServerResponse, message = "Page Not Found"): void {
    response.statusCode = StatusCode.PAGE_NOT_FOUND;
    response.setHeader("Content-Type", "application/json");

    const jsonMessage = JSON.stringify({
      message,
      statusCode: StatusCode.PAGE_NOT_FOUND,
    });

    response.end(jsonMessage);
  }

  status500(response: ServerResponse, message = "Internal Server Error"): void {
    response.statusCode = StatusCode.INTERNAL_SERVER_ERROR;
    response.setHeader("Content-Type", "application/json");

    const jsonMessage = JSON.stringify({
      message,
      statusCode: StatusCode.INTERNAL_SERVER_ERROR,
    });

    response.end(jsonMessage);
  }
}

export default ResponseCreator;
