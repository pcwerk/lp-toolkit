import test from 'node:test';
import server from '../index.mjs';
import supertest from 'supertest';

const requestWithSupertest = supertest(server);

describe('Server Endpoints', () => {

    test('GET /timestamp', async () => {
      const res = await requestWithSupertest.get('/timestamp');
        expect(res.status).toEqual(200);
        expect(res.type).toEqual(expect.stringContaining('json'));
        expect(res.body).toHaveProperty('timestamp')
    });
  
  });