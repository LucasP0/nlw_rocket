import cors from 'cors';
import express from 'express';
import { Download } from './download.js';

const app = express();
app.use(cors());

app.get('/summary/:id', (request, response) => {
  Download(request.params.id)
  response.json({ result: "Download realizado com sucesso"})
})


app.listen(3333, () => console.log("Muito dinheiro pra gente mamãe")); 