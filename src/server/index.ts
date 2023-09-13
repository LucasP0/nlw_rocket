import cors from 'cors';
import express from 'express';

const app = express();
app.use(cors());

app.listen(5173, () => console.log("éhojeeeeeeeeee"))