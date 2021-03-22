const server = require("../server");
const chai = require("chai");
const chaiHttp = require("chai-http");

const { expect } = chai;

/* ----------- GET tests ------------*/
chai.use(chaiHttp);
describe("Server!", () => {
  it("welcomes user to the api", (done) => {
    chai
      .request(server)
      .get("/")
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body.createdBy).to.equals("Jared Long");
        expect(res.body.message).to.equals("Welcome to the ATX-Animals api");
        done();
      });
  });

  it("gets all of the animals from mongodb", (done) => {
    chai
      .request(server)
      .get("/animals")
      .end((err, res) => {
        expect(res).to.have.status(200);
        done();
      });
  });

  it("gets an animal by its id", (done) => {
    chai
      .request(server)
      .get("/animals/:id")
      .end((err, res) => {
        expect(res).to.have.status(200);
        done();
      });
  });

  it("errors as it is unauthorized", (done) => {
    chai
      .request(server)
      .get("/tasks")
      .end((err, res) => {
        expect(res).to.have.status(401);
        expect(res.body.msg).to.equals("Not Authorized");
        done();
      });
  });

  it("should get all of the users without showing password", (done) => {
    chai
      .request(server)
      .get("/users")
      .end((err, res) => {
        expect(res).to.have.status(200);
        done();
      });
  });

  /* --------- Task/Adoption Post test --------*/
  it("posts to tasks", (done) => {
    chai
      .request(server)
      .post("/tasks")
      .send({
        animalType: "test",
        animalName: "chai",
        personName: "mocha",
        address: "test",
        currentPets: 1,
        anyChildren: 3,
        typeOfResidence: "address",
        contactInfo: "number",
        status: "open",
        employee: "",
      })
      .end((err, res) => {
        expect(res).to.have.status(200);
        done();
      });
  });
});
