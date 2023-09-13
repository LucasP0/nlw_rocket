import cors from 'cors';
import express from 'express';

const app = express();
app.use(cors());

app.get('/summary', (request, response) => {
  response.send(('Server '))
})


app.listen(3333, () => console.log("Muito dinheiro pra gente mamãe")); 