const express = require('express');

const userRoute = require('./routes/userRoute.js')
const app = express();
const port = 3000

userRoute(app)

app.get('/', (req, res) => res.send('Ola mundo pelo express'))

app.listen(port,() => console.log('Api Rodando na Porta 3000'))