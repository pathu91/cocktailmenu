const express = require('express');
const app = express();
const path = require('path');
const PORT = process.env.PORT || 3000;
const drinkRouter = require('./routes/drinks');

app.use(express.json());
app.use(express.static(path.resolve(__dirname, '../../dist')));
app.use('/drinks', drinkRouter);


app.get('/', (req, res) =>
  res.status(200).sendFile(path.resolve(__dirname, '../../dist/index.html'))  
);


// global error handler
app.get("*", (req, res) => {
  console.log('error in catch all handler')
  res.sendStatus(404)
});

app.listen(PORT, () => console.log(`Listening on PORT ${PORT}`));