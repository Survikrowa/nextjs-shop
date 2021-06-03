import supertest from 'supertest';
import { app } from '../../server';

describe('Auth Middlewares', () => {
  it('Should throw 401 if bearer token is not provided', async () => {
    await supertest(app).get('/api/session/me').expect(401);
  });
});
