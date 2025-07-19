const express = require('express'); 
const app = express();
const path = require('path');

app.use(express.json());                  //parsers
app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'ejs'); // Set the view engine to EJS
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.render('index');
});

app.get('/profile/:username', (req, res) => {
  res.send(req.params.username);
});

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});