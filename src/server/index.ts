import cors from 'cors';
import express from 'express';

import { Download } from './download.ts';
import { transcribe } from './transcribe.ts';
import { Summarize } from './summarize.ts';
import { Convert } from './convert.ts';

const app = express();
app.use(express.json());
app.use(cors());

app.get('/summary/:id', async (request, response) => {
  try {
    await Download(request.params.id)
    const audioConverted = await Convert()
    const result = await transcribe(audioConverted)

    return response.json({ result })
  } catch (error) {
    console.log(error)
    return response.json({ error })
  }

})

app.post("/summary", async (request, response) => {
  try {
    const result = await Summarize(request.body.text)
    return response.json({ result })
  } catch (error) {
    console.log(error)
    return response.json({ error })
  }

})

app.listen(3333, () => console.log("Porta 3333 está ativa")); 