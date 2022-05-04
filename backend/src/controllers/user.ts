
import { Request, Response } from 'express';
import Token from '../models/token';
import User from '../models/user';
import { randomUUID } from 'crypto';

const users: Array<User> = [ 
        {"name": "kusnadi", "password": "kusnadi"},
        {"name": "laurensia", "password": "laurensia"}
    ];

const tokens: Array<Token> = []

const login = async (req: Request, resp: Response) =>{
    let user: User = req.body;    
    console.log(JSON.stringify(user));
    let authenticatedUsers = users.filter(u => u.name === user.name && u.password === user.password);
    if (authenticatedUsers.length === 1){
        let filteredTokens: Array<Token> = tokens.filter(t => t.name === authenticatedUsers[0].name);        

        if (filteredTokens.length === 0){
            let token = new Token(user.name, randomUUID().toString());
            tokens.push(token);
            resp.json(token);
        
        }
        else  if (filteredTokens.length == 1){
            resp.json(filteredTokens[0]);
        }
        else{
            throw 'Illegal state exception';
        }
    }
    else{
        resp.status(403).json(new Error("Login is not valid"));
    }        
}

const logout = async (req: Request, resp: Response) =>{
    let user: User = req.body;
    let removeIndex = tokens.findIndex(t => t.name === user.name);
    if (removeIndex > -1 ){
        tokens.splice(removeIndex, 1);
    }
    resp.sendStatus(200);
}

export {login, logout };
