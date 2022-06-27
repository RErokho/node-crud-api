import chai from "chai";
import chaiHttp from "chai-http";

import { TEST_API } from "../constants";
import { TEST_USERS } from "../testData";
import { TTestData } from "../types";

chai.should();
chai.use(chaiHttp);

const DeleteUsers = async () => {
  const testUser = TEST_USERS[0] as TTestData;

  let numUser: number = 0;

  it("POST /users -> STATUS 201 and created record", (done) => {
    chai
      .request(TEST_API)
      .post("/users")
      .set("content-type", "application/json")
      .send(testUser)
      .end((_err: any, res: any) => {
        res.should.have.status(201);
        res.body.should.to.deep.include(testUser);

        done();
      });
  });

  it("GET /users -> STATUS 200 and array of users", (done) => {
    chai
      .request(TEST_API)
      .get(`/users`)
      .end((_err: any, res: any) => {
        res.should.have.status(200);
        res.body.should.be.a("array");

        numUser = res.body.length;

        done();
      });
  });

  it("DELETE /users/[user_id:number] -> STATUS 204", (done) => {
    chai
      .request(TEST_API)
      .delete(`/users/${numUser}`)
      .end((_err: any, res: any) => {
        res.should.have.status(204);

        done();
      });
  });

  it("DELETE /users/[user_id:not number] -> STATUS 400 and error message", (done) => {
    chai
      .request(TEST_API)
      .delete(`/users/another`)
      .end((_err: any, res: any) => {
        res.should.have.status(400);
        res.body.should.to.deep.include({
          message: "Incorrect UserId",
          statusCode: 400,
        });

        done();
      });
  });

  it("DELETE /users/[user_id:negative number] -> STATUS 400 and error message", (done) => {
    chai
      .request(TEST_API)
      .delete(`/users/-5`)
      .end((_err: any, res: any) => {
        res.should.have.status(400);
        res.body.should.to.deep.include({
          message: "Incorrect UserId",
          statusCode: 400,
        });

        done();
      });
  });

  it("DELETE /users/[user_id:float number] -> STATUS 400 and error message", (done) => {
    chai
      .request(TEST_API)
      .delete(`/users/0.5`)
      .end((_err: any, res: any) => {
        res.should.have.status(400);
        res.body.should.to.deep.include({
          message: "Incorrect UserId",
          statusCode: 400,
        });

        done();
      });
  });

  it("DELETE /users/[user_id:zero number] -> STATUS 400 and error message", (done) => {
    chai
      .request(TEST_API)
      .delete(`/users/0`)
      .end((_err: any, res: any) => {
        res.should.have.status(400);
        res.body.should.to.deep.include({
          message: "Incorrect UserId",
          statusCode: 400,
        });

        done();
      });
  });

  it("DELETE /users/[user_id:infinity] -> STATUS 400 and error message", (done) => {
    chai
      .request(TEST_API)
      .delete(`/users/infinity`)
      .end((_err: any, res: any) => {
        res.should.have.status(400);
        res.body.should.to.deep.include({
          message: "Incorrect UserId",
          statusCode: 400,
        });

        done();
      });
  });

  it("DELETE /users/[user_id:very large number(user does not exist)] -> STATUS 404 and error message", (done) => {
    chai
      .request(TEST_API)
      .delete(`/users/99999999`)
      .end((_err: any, res: any) => {
        res.should.have.status(404);
        res.body.should.to.deep.include({
          message: "User Does Not Exist",
          statusCode: 404,
        });

        done();
      });
  });
};

export default DeleteUsers;
