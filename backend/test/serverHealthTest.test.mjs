// import test from 'node:test';
// import server from '../backend/server.js'
// import supertest from 'supertest';

const requestWithSupertest = supertest(server);

describe("Server Endpoints", () => {
  test("adds 1 + 2 to equal 3", () => {
    expect(1 + 2).toBe(3);
  });
  // test('GET /timestamp', async () => {
  //   const res = await requestWithSupertest.get('/timestamp');
  //     expect(res.status).toEqual(200);
  //     // expect(res.type).toEqual(expect.stringContaining('json'));
  //     // expect(res.body).toHaveProperty('timestamp')
  // });
});
