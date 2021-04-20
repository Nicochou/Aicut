
    const request = require('supertest');
    const app = require('../app'); 

    /*
      declare the token variable in a scope accessible
      by the entire test suite
    */
    let token;

    beforeAll((done) => {
      request(app)
        .post('/api/auth/signup')
        .send({
          username: user,
          password: pw,
        })
        .end((err, response) => {
            console.log(err, response)
          //token = response.body.token; // save the token!
          done();
        });
    });