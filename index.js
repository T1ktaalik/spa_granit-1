
require('dotenv').config();
const path = require('path');
const express = require('express')
const {port, appname } = require('./config');
const res = require('express/lib/response');
const app = express();

app.use(express.static(path.join(__dirname, 'public')));
app.use('/api/forge/oauth', require('./routes/oauth'));
app.use('/api/forge/oss', require('./routes/oss'));




app.listen(port, console.log(`the app '${appname}'is listening ${port}`));
