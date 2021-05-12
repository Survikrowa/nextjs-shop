import { createUser } from './user.controller';
import { prisma } from '../../db';

const mockRequest = (userCredentials?: UserCredentials) => {
  return {
    body: {
      ...userCredentials,
    },
  };
};

const mockResponse = () => {
  const res: Response = {};
  res.status = jest.fn().mockReturnValue(res);
  res.json = jest.fn().mockReturnValue(res);
  return res;
};

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
    const req = mockRequest({
      username: 'testUser',
      password: 'testUser009!',
      email: 'testUser@test.com',
    });
    const res = mockResponse();
    //@ts-expect-error
    await createUser(req, res);
    expect(res.status).toHaveBeenCalledWith(201);
  });
  it('Should return 422 if credentials validation throws an error', async () => {
    const req = mockRequest();
    const res = mockResponse();
    //@ts-expect-error
    await createUser(req, res);
    expect(res.status).toHaveBeenCalledWith(422);
  });
  it('Should return 409 if user already exists', async () => {
    const req = mockRequest({
      username: 'testtest',
      password: 'testTest009!',
      email: 'test@test.com',
    });
    const res = mockResponse();
    //@ts-expect-error
    await createUser(req, res);
    expect(res.status).toHaveBeenCalledWith(409);
  });
});

type UserCredentials = {
  username: string;
  password: string;
  email: string;
};

type Response = {
  status?: jest.Mock;
  json?: jest.Mock;
};
