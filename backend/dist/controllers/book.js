"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createBook = exports.listBookOrSearchByName = void 0;
const book_1 = __importDefault(require("../models/book"));
const bookAuthorParam = "author";
const books = [
    new book_1.default("Little things", "Kusnadi", 2022),
    new book_1.default("Supernatural things", "laurensia", 1900),
    new book_1.default("Sudoko Dirlaba", "Kusnadi", 1967)
];
const listBookOrSearchByName = (req, resp) => __awaiter(void 0, void 0, void 0, function* () {
    if (req.query[bookAuthorParam]) {
        let filteredBooks = books.filter(b => b.author === req.query[bookAuthorParam]);
        resp.json(filteredBooks);
    }
    else {
        resp.json(books);
    }
});
exports.listBookOrSearchByName = listBookOrSearchByName;
const createBook = (req, resp) => __awaiter(void 0, void 0, void 0, function* () {
    let book = req.body;
    books.push(book);
    resp.sendStatus(200);
});
exports.createBook = createBook;
//# sourceMappingURL=book.js.map