import cors from 'cors';
import express from 'express';
import { Download } from './download.ts';

const app = express();
app.use(cors());

app.get('/summary/:id', (request, response) => {
  Download(request.params.id)
  response.json({ result: "Download realizado com sucesso"})
})


app.listen(3333, () => console.log("Porta 3333 está ativa")); 