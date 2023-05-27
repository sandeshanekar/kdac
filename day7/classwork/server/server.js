const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const jwt = require('jsonwebtoken')
const config = require('./config')
const utils = require('./utils')

const app = express()

// apply middleware
app.use(cors('*'))
app.use(morgan('combined'))
app.use(express.json())

// add a middleware to check the token
app.use((request, response, next) => {
  // check which urls the token should be applied
  if (request.url == '/user/signup' || request.url == '/user/signin') {
    // the token is not required for signup and signin
    next()
  } else {
    // check if the token is available
    const token = request.headers['token']
    if (!token) {
      response.send(utils.createErrorResponse('missing token'))
      return
    }

    try {
      // get the jwt token's payload
      const payload = jwt.verify(token, config.secret)

      // add the user details to the request
      request['userId'] = payload['id']
      request['userName'] = payload['name']

      // call the next api
      next()
    } catch (ex) {
      response.send(utils.createErrorResponse('invalid token'))
    }
  }
})

// add required routes
const userRouter = require('./routes/user')
const noteRouter = require('./routes/note')

app.use('/user', userRouter)
app.use('/note', noteRouter)

app.listen(4000, '0.0.0.0', () => {
  console.log(`server started successfully on port 4000`)
})
