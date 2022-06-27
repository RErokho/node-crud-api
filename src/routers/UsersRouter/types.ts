import { TRouteList } from "../types";

/*
  UserRoute
 */
export interface IUserRouter {
  getRoutes: TGetRoutes;
}

/*
  Methods
 */

export type TGetRoutes = () => TRouteList;
