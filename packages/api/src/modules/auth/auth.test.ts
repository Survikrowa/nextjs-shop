import supertest from 'supertest';
import { prisma } from '../../db';
import { app } from '../../server';

afterEach(async () => {
  await prisma.user.deleteMany();
});

afterAll(async () => {
  await prisma.$disconnect();
});

describe('User Register Controller', () => {
  it('Creates user', async () => {
    const userCredentials = {
      username: 'testUser',
      password: 'testUser009!',
      email: 'testUser@test.com',
    };
    await supertest(app)
      .post('/api/users')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .send(userCredentials)
      .expect(201);
  });
  it('Should return 422 if credentials validation throws an error', async () => {
    await supertest(app)
      .post('/api/users')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .send({})
      .expect(422);
  });
  it('Should return 409 if user already exists', async () => {
    const userCredentials = {
      username: 'testtest',
      password: 'testTest009!',
      email: 'test@test.com',
    };
    await supertest(app)
      .post('/api/users')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .send(userCredentials);
    await supertest(app)
      .post('/api/users')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .send(userCredentials)
      .expect(409);
  });
});

describe('User Login Controller', () => {
  it('Should return 422 if credentials validation throws an error', async () => {
    await supertest(app)
      .post('/api/users/login')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .send({})
      .expect(422);
  });
  it("Should return 404 if user doesn't exists", async () => {
    const userCredentials = {
      username: 'testUser',
      password: 'testUser009!',
    };
    await supertest(app)
      .post('/api/users/login')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .send(userCredentials)
      .expect(404);
  });
  it('Should return 404 if user provided wrong password', async () => {
    const userCredentials = {
      username: 'testtest',
      password: 'testUser009!',
    };
    await supertest(app)
      .post('/api/users/login')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .send(userCredentials)
      .expect(404);
  });
  it('Should return 200 if user sucessfully logged in', async () => {
    const userLogInCredentials = {
      username: 'survitest',
      password: 'SurviTest009!',
    };
    const userRegiserCredentials = {
      username: 'survitest',
      email: 'survitest@test.pl',
      password: 'SurviTest009!',
    };
    await supertest(app)
      .post('/api/users')
      .set('Accept', 'application/json')
      .send(userRegiserCredentials);
    await supertest(app)
      .post('/api/users/login')
      .set('Accept', 'application/json')
      .send(userLogInCredentials)
      .expect('Content-Type', /json/)
      .expect(200);
  });
});
