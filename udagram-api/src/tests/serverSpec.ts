import supertest from 'supertest';
import {IndexRouter} from '../controllers/v0/index.router';
const request = supertest(IndexRouter);
describe('Test Endpoints', () => {
    it('/api', async () => {
        const res = await request.get('/');
        expect(res.text).toEqual("v0");
    });
    
});
