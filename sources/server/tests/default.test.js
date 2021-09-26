const app = require("../server.js"); 
const supertest = require("supertest");
const request = supertest(app);

  // We describe the test
  describe("GET / DEFAULT TESTS", () => {
    // Api Success Test
    it("it should TestSuccess default test", async done => {
        // We call the routes
        const response = await request.get("/api/testSuccess");
        // We get the status
        const data = response.status;
        // We expect the status to be Success
        expect(data).toBe(200);
      done();
    });
    // Api Error Test
    it("it should TestError default test", async done => {
        // We call the routes
        const response = await request.get("/api/testError");
        // We get the status
        const data = response.status;
        // We expect the status to be Error
        expect(data).toBe(400);
      done();
    });
    // Api Authorize Test
    it("it should TestAuthorize default test", async done => {
        // We call the routes
        const response = await request.get("/api/testAuthorize");
        // We get the status
        const data = response.status;
        // We expect the status to be Unauthorize
        expect(data).toBe(403);
      done();
    });
  });