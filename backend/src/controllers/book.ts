import { Request, Response } from 'express';
import Book from '../models/book'

const bookAuthorParam : string = "author";

const books : Array<Book> = [
    new Book("Little things", "Kusnadi", 2022),
     new Book("Supernatural things","laurensia",1900),
     new Book("Sudoko Dirlaba", "Kusnadi",1967)     
    ];


const listBookOrSearchByName  = async (req: Request, resp: Response) => {
    if (req.query[bookAuthorParam]){
        let filteredBooks = books.filter(b => b.author === req.query[bookAuthorParam]);
        resp.json(filteredBooks);
    }else{
        resp.json(books);
    }   
}

const createBook = async (req: Request, resp: Response) => {
    let book : Book = req.body;
    books.push(book);
    resp.sendStatus(200);
}

export {listBookOrSearchByName, createBook };