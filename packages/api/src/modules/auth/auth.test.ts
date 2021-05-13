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

describe('Test User Controller', () => {
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
