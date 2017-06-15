const express = require('express')
const path = require('path')
const bodyParser = require('body-parser');



const app = express()

app.use(express.static(__dirname))
app.use(bodyParser());

app.listen(process.env.PORT || 3000)

console.log('Neighborly running on :8080');