import cors from 'cors';
import express from 'express';

import { Download } from './download.ts';
import { transcribe } from './transcribe.ts';
import { Summarize } from './summarize.ts';


const app = express();
app.use(express.json());
app.use(cors());

app.get('/summary/:id', async (request, response) => {
  await Download(request.params.id)
  const result = await transcribe()


  return response.json({ result })
})

app.post("/summary", async (request, response) => {
  const result = await Summarize(request.body.text)
  return response.json({ result })
})

app.listen(3333, () => console.log("Porta 3333 está ativa")); 