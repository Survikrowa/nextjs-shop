import supertest from 'supertest';
import { prisma } from '../../db';
import { app } from '../../server';

beforeEach(async () => {
  await prisma.user.create({
    data: {
      username: 'testtest',
      password: 'testTest009!',
      email: 'test@test.com',
    },
  });
});

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
    await supertest(app).post('/api/users').send(userCredentials).expect(201);
  });
  it('Should return 422 if credentials validation throws an error', async () => {
    await supertest(app).post('/api/users').send({}).expect(422);
  });
  it('Should return 409 if user already exists', async () => {
    const userCredentials = {
      username: 'testtest',
      password: 'testTest009!',
      email: 'test@test.com',
    };
    await supertest(app).post('/api/users').send(userCredentials).expect(409);
  });
});

describe('User Login Controller', () => {
  it('Should return 422 if credentials validation throws an error', async () => {
    await supertest(app).post('/api/users/login').send({}).expect(422);
  });
  it("Should return 404 if user doesn't exists", async () => {
    const userCredentials = {
      username: 'testUser',
      password: 'testUser009!',
    };
    await supertest(app).post('/api/users/login').send(userCredentials).expect(404);
  });
  it('Should return 401 if user provided wrong password', async () => {
    const userCredentials = {
      username: 'testtest',
      password: 'testUser009!',
    };
    await supertest(app).post('/api/users/login').send(userCredentials).expect(401);
  });
});
