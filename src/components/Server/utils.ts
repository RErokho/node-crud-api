import { TCreateReg, TReplaceRoute, TTrimSlash } from "./types";

export const trimSlash: TTrimSlash = (str: string) => {
  return str.replaceAll(/^\/|\/$/g, "");
};

export const replaceRoute: TReplaceRoute = (route: string) => {
  return route.replace(/\/\*$/, "/(.+)");
};

export const createReg: TCreateReg = (route: string) => {
  const replaced: string = replaceRoute(route);

  return new RegExp(`^${replaced}$`);
};
