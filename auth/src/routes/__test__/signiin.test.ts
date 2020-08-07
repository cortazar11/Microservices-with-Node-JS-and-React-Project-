import request from 'supertest';
import { app } from '../../app';

it("fails when email that doesn't exists is supplied", async () => {
  await request(app)
    .post('/aoi/users/signin')
    .send({
      email: 'test@test.com',
      password: 'password',
    })
    .expect(404);
});

it('fails when incorrect password is supplied', async () => {
  await request(app)
    .post('/api/users/signup')
    .send({
      email: 'test@test.com',
      password: 'password',
    })
    .expect(201);

  await request(app)
    .post('/api/users/signin')
    .send({
      email: 'test@test.com',
      password: 'asgagagraeg',
    })
    .expect(400);
});

it('respond with cookioe whe give valkid credentials', async () => {
  await request(app)
    .post('/api/users/signup')
    .send({
      email: 'test@test.com',
      password: 'password',
    })
    .expect(201);

  const response = await request(app)
    .post('/api/users/signin')
    .send({
      email: 'test@test.com',
      password: 'password',
    })
    .expect(200);
  expect(response.get('Set-Cookie')).toBeDefined();
});
