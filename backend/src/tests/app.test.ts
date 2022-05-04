
 import request from 'supertest';
import  app from '../app';
import { Request } from 'express';
import User from '../models/user';
 

describe('user tests', () => {
    test('login success',  async () => {
        var res = await request(app)
            .post('/api/user/login')
            .send({"name": "kusnadi", "password": "kusnadi"});
        
        expect(res.statusCode).toEqual(200);
        expect(res.body.name).toEqual("kusnadi");    
    });    
    
    test('login failure',  async () => {
        var res = await request(app)
            .post('/api/user/login')
            .send({"name": "kus", "password": "kusnadi"});
        
        expect(res.statusCode).toEqual(403);
 
    });   
    
});

