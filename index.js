const express = require('express')
require('dotenv').config()
// console.log(process.env)
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/shreya', (req, res) => {
  res.send('Hello Ji Kaise hai mein hu Shreya jain')
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`)
})