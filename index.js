import express from 'express';

const PORT = process.argv[2] || 80;

// Initialise Express
const app = express();

app.set('view engine', 'ejs');

app.get('/bananas', (request, response) => {

  const responseText = `This is a random number: ${Math.random()}`;

  console.log('request came in', responseText);

  const data = { responseText };

  response.render('bananas', data);
});

app.listen(PORT);
