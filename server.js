
import cors from 'cors';
import express from 'express';
import bodyParser from 'body-parser';


const app = express();
app.use(cors());

const port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send("Hello! ");
});

app.listen(port, () => {
  console.log(`The Demons are listening.. ${port}`);
});

