const express = require('express');
const fetch = require('node-fetch');
const app = express();

app.set('view engine', 'ejs');

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.render('index');
});

app.get('/recipes', (req, res) => {
  const app_id = 'your_app_id'; // replace with your own app id
  const app_key = 'your_app_key'; // replace with your own app key
  const query = 'chicken'; // replace with user's search query
  const url = `https://api.edamam.com/search?q=${query}&app_id=${c9735052}&app_key=${
    fe25f3f914ec4247af1ff658aff815ae}&from=0&to=10`;
  fetch(url)
    .then(response => response.json())
    .then(data => {
      const recipes = data.hits.map(hit => hit.recipe);
      res.render('recipes', { recipes });
    })
    .catch(error => console.log(error));
});

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});