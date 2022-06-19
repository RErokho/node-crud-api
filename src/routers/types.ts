import { IncomingMessage, ServerResponse } from "http";

import { Method } from "../components/Server/types";

export type TControllerHandler = (
  req: IncomingMessage,
  res: ServerResponse,
  urlData: string | null,
) => Promise<void>;
export type TRoute = [Method, string, TControllerHandler];
export type TRouteList = Array<TRoute>;

/*
  Router
 */
export interface IRouter {
  getRoutes: TGetRoutes;
}

/*
  Methods
 */

export type TGetRoutes = () => TRouteList;
