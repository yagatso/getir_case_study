const request = require('supertest');

let server;

describe('/', () => {
    beforeEach(() => { server = require('../../../index'); })
    afterEach(() => { server.close(); })

    describe('verifying the parameters', () => {
        it('should result in 400 given bad request', async () => {
            const res = await request(server).post('/')
                .send({
                    startDate: '2016-01-26',
                    endDate: '2018-02-02',
                    minCount: 'abcd',
                    maxCount: 3000
                })
            expect(res.status).toBe(400);
        })
        it('should result in 400 given a request with missing parameter', async () => {
            const res = await request(server).post('/')
                .send({
                    startDate: '2016-01-26',
                    endDate: '2018-02-02',
                    minCount: 2700
                })
            expect(res.status).toBe(400);
        })
        it('should result in 200 given correct parameters', async () => {
            const res = await request(server).post('/')
                .send({
                    startDate: '2016-01-26',
                    endDate: '2018-02-02',
                    minCount: 2700,
                    maxCount: 3000
                })
            expect(res.status).toBe(200);
        })
    })  
});