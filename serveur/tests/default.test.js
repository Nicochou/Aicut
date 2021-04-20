const request = require('supertest');
const express = require("express");
const app = express();

test('It should require authorization', () => {
    return request(app)
      .get('/')
      .then((response) => {
        expect(response.statusCode).toBe(200);
      });
  });