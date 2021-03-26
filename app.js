const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const port = 5000;

const app = express();
app.use(cors());
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());


const hello = {
	name: 'arif'
}

const result = {name: 'added'}

app.get('/', (req, res) => {
  res.send(JSON.stringify(hello))
});

app.post('/', (req, res) => {
	console.log(req.body);
	res.send(JSON.stringify(result));
})
app.listen(port);