import express from 'express';

const app = express();

app.use('/', (request, response) => response.json({ message: 'ping' }));

app.listen(3333, () => {
  console.log('Server running at port 3333');
});
