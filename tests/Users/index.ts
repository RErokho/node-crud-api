import chaiHttp from "chai-http";
import chai from "chai";

import CRUD from "./CRUD";
import GetUsers from "./GetUsers";
import PostUsers from "./PostUsers";
import PutUsers from "./PutUsers";

chai.should();
chai.use(chaiHttp);

describe("Scenarios", () => {
  describe("Check CRUD api", CRUD);
  describe("Check GET:USERS api", GetUsers);
  describe("Check POST:USERS api", PostUsers);
  describe("Check PUT:USERS api", PutUsers);
});
