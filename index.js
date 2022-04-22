
const express = require('express')
const app = express();
app.use(express.static('public'))
//app.get('/', function (req, res){res.send('hi')});
app.listen(3000, console.log(`is listening 3000!`));