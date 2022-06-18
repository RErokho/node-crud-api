import { createServer, Server as THttpServer } from "http";

import { createReg, trimSlash } from "./utils";
import { Method, TMethodRouteTable, TRouteHandler, TRouteTable } from "./types";

import ResponseCreator from "../ResponseCreator";

const rc = ResponseCreator.getRC();

class Server {
  private static serverInstance: Server | null = null;

  private server: THttpServer;
  private isStarted: boolean = false;
  private routeTable: TRouteTable = {
    [Method.GET]: [],
    [Method.POST]: [],
    [Method.PUT]: [],
    [Method.DELETE]: [],
  };
  private baseUrl: string = "";

  private constructor() {
    this.server = createServer((response, request) => {
      const { method, url } = response;

      if (method === undefined || url === undefined) {
        rc.status404(request, "Endpoint Not Found");

        return;
      }

      const trimmedUrl = trimSlash(url);

      const routeTable: TMethodRouteTable = this.routeTable[method as Method];

      const route = routeTable.find(([reg, _handler]) => reg.test(trimmedUrl));

      if (route === undefined) {
        rc.status404(request, "Endpoint Not Found");

        return;
      }

      const handler: TRouteHandler = route[1];
      const routeData = route[0].exec(trimmedUrl);

      handler(
        response,
        request,
        (routeData === null ? null : routeData[1]) || null
      );
    });
  }

  public static getServer(): Server {
    if (this.serverInstance === null) {
      this.serverInstance = new Server();
    }

    return this.serverInstance;
  }

  public start(port: string): void {
    if (this.isStarted) {
      return;
    }

    this.server.listen(port);
    this.isStarted = true;
  }

  public setBaseUrl(baseUrl: string): void {
    this.baseUrl = trimSlash(baseUrl);
  }

  public get(route: string, handler: TRouteHandler): void {
    const trimmed: string = trimSlash(route);
    const routeUrl = `${this.baseUrl}/${trimmed}`;

    this.routeTable[Method.GET].push([createReg(routeUrl), handler]);
  }

  public post(route: string, handler: TRouteHandler): void {
    const trimmedRoute = trimSlash(route);
    const routeUrl = `${this.baseUrl}/${trimmedRoute}`;

    this.routeTable[Method.POST].push([createReg(routeUrl), handler]);
  }

  public put(route: string, handler: TRouteHandler): void {
    const trimmedRoute = trimSlash(route);
    const routeUrl = `${this.baseUrl}/${trimmedRoute}`;

    this.routeTable[Method.PUT].push([createReg(routeUrl), handler]);
  }

  public delete(route: string, handler: TRouteHandler): void {
    const trimmedRoute = trimSlash(route);
    const routeUrl = `${this.baseUrl}/${trimmedRoute}`;

    this.routeTable[Method.DELETE].push([createReg(routeUrl), handler]);
  }
}

export default Server;
