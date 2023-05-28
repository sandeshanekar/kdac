const express = require('express')
const router = express.Router()
const db = require('../db')
const utils = require('../utils')
const crypto = require('crypto-js')
const jwt = require('jsonwebtoken')
const config = require('../config')

router.post('/signup', (request, response) => {
  const { firstName, lastName, password, email } = request.body

  const encryptedPassword = String(crypto.SHA256(password))
  const statement = `insert into user (firstName, lastName, email, password) values (?, ?, ?, ?)`
  db.pool.query(
    statement,
    [firstName, lastName, email, encryptedPassword],
    (error, result) => {
      if (error) {
        response.send(utils.createErrorResponse(error))
      } else {
        response.send(utils.createSuccessResponse(result))
      }
    }
  )
})

router.post('/signin', (request, response) => {
  const { email, password } = request.body
  const encryptedPassword = String(crypto.SHA256(password))
  const statement = `select id, firstName, lastName from user where email = ? and password = ?`
  db.pool.query(statement, [email, encryptedPassword], (error, users) => {
    if (error) {
      response.send(utils.createErrorResponse(error))
    } else {
      // check if user exists
      if (users.length > 0) {
        // user exists
        const user = users[0]

        // payload
        const payload = {
          id: user['id'],
          name: `${user['firstName']} ${user['lastName']}`,
        }

        // create a token
        const token = jwt.sign(payload, config.secret)
        response.send(
          utils.createSuccessResponse({
            token,
            name: `${user['firstName']} ${user['lastName']}`,
          })
        )
      } else {
        response.send(utils.createErrorResponse('user does not exist'))
      }
    }
  })
})

module.exports = router
