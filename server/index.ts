import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

const app = express();
const port = process.env.PORT || 4000;
dotenv.config();

app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
  }),
);

app.listen(port, () => {
  console.log(`Created server on port ${port}`);
});
