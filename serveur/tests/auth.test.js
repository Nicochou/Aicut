const app = require("../server.js"); 
const supertest = require("supertest");
const request = supertest(app);

// We define an event
const event = new Date().getTime();

// We define a user
const UserTest = {
  username: 'User_test_' + event,
  email: 'User_test_' + event + '@mail.com',
  password: 123456
}

// We define a moderator
const ModeratorTest = {
  username: 'Moderator_test_' + event,
  email: 'Moderator_test_' + event + '@mail.com',
  password: 123456,
  role: ["moderator", "user"]
}

// We define an admin
const AdminTest = {
  username: 'Admin_test_' + event,
  email: 'Admin_test_' + event + '@mail.com',
  password: 123456,
  role: ["moderator", "user", "admin"]
}

  // We describe the test
  describe("GET / AUTH TESTS", () => {
    // User Auth Register Test
    it("it should register a new user", async done => {
        // We call the route
        const response = 
          await request
          .post("/api/auth/signup")
          .send({
            username: JSON.stringify(UserTest.username),
            email: JSON.stringify(UserTest.email),
            password: JSON.stringify(UserTest.password),
            passwordCheck: JSON.stringify(UserTest.password)
          });
        // We get the status
        let data = response.status;
        // We expect a status 200 Success
        expect(data).toBe(200);
      done();
    });
    // User Auth Login Test
    it("it should login the new user", async done => {
      // We call the route
      const response = 
        await request
        .post("/api/auth/signin")
        .send({
          username: JSON.stringify(UserTest.username),
          password: JSON.stringify(UserTest.password)
        });
      // We get the status
      let data = response.status;
      // We expect a status 200 Success
      expect(data).toBe(200);
    done();
  });
  });