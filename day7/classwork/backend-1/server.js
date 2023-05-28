const express = require('express')
const morgan = require('morgan')
const cors = require('cors')

const app = express()
app.use(morgan('combined'))
app.use(cors('*'))

app.get('/', (request, response) => {
  response.send('welcome to the backend v2')
})

app.listen(3000, '0.0.0.0', () => {
  console.log(`server started on port 3000`)
})
