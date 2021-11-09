const express = require('express')
const app = express()
const port = process.env.port || 5000

app.get('/', (req, res) => {
  res.send('Hello Car House!')
})

app.listen(port, () => {
  console.log(`listening at ${port}`)
})