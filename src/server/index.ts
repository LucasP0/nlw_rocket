import cors from 'cors';
import express from 'express';
import { Download } from './download.ts';
import { transcribe } from './transcribe.ts';

const app = express();
app.use(cors());

app.get('/summary/:id', async (request, response) => {
  await Download(request.params.id)

  const result = await transcribe()


  response.json({ result })
})


app.listen(3333, () => console.log("Porta 3333 está ativa")); 