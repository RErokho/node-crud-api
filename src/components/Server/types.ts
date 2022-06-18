import { IncomingMessage, ServerResponse } from "http";

export enum Method {
  GET = "GET",
  POST = "POST",
  PUT = "PUT",
  DELETE = "DELETE",
}

export type TRouteHandler = (
  req: IncomingMessage,
  res: ServerResponse,
  data: string | null
) => void;

export type TRoutePair = [RegExp, TRouteHandler];
export type TMethodRouteTable = Array<TRoutePair>;
export type TRouteTable = { [k in Method]: TMethodRouteTable };

export type TTrimSlash = (str: string) => string;

export type TReplaceRoute = (route: string) => string;

export type TCreateReg = (route: string) => RegExp;
