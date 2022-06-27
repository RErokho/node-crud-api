/*
  Proxy
 */

export interface IProxy {
  start: TStart;
}

/*
  Methods
 */

export type TStart = () => void;
