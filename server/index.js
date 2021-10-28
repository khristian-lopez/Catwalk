const express = require('express');

const app = express();

const port = 3000;


app.use(express.json());
app.use(express.urlencoded({ extended: true, useNewUrlParser: true }));
app.use(express.static(__dirname + '/../client/dist'));

// app.get('/', (req, res) => {
//   res.send('hello world');
// })


app.listen(port, (err) => {
  if (err) {
    console.error(err);
  } else {
    console.log(`Server running on port ${port}`);
  }
})