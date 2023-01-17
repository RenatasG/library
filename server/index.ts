import express from 'express';
import cors from 'cors';

const app = express();

app.use(
  cors({
    origin: 'http://localhost:5173',
  }),
);

const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`Created server listening on port ${port}`);
});
