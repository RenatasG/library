import type { Request, Response } from 'express';
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { readFile } from 'fs';

const app = express();
const port = process.env.PORT || 4000;
dotenv.config();

app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
  }),
);

app.get('/books/:id', (req: Request, res: Response) => {
  readFile(`${process.cwd()}/mocks/books.json`, 'utf8', (err, data) => {
    const books = JSON.parse(data);
    res.send(books[req.params['id']]);
  });
});

app.listen(port, () => {
  console.log(`Created server on port ${port}`);
});
