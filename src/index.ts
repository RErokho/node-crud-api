import Cluster from "./components/Cluster";
import Server from "./components/Server";

import { API_URL } from "./constants";
import config from "./configuration/default";

const server = new Server(API_URL);

/*
  Clustering
 */

const { multi } = config;

const cl = new Cluster(server, multi);
cl.start();
