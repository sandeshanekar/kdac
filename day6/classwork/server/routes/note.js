const express = require('express')
const router = express.Router()
const db = require('../db')
const utils = require('../utils')

router.post('/', (request, response) => {
  const { title, details } = request.body
  const statement = `insert into note (title, details, userId) values (?, ?, ?)`
  db.pool.query(
    statement,
    [title, details, request['userId']],
    (error, result) => {
      response.send(utils.createResponse(error, result))
    }
  )
})

router.get('/', (request, response) => {
  const statement = `select * from note where userId = ?`
  db.pool.query(statement, [request['userId']], (error, result) => {
    response.send(utils.createResponse(error, result))
  })
})

router.put('/:id', (request, response) => {
  const { id } = request.params
  const { title, details } = request.body
  const statement = `update note set title = ?, details = ? where id = ?`
  db.pool.query(statement, [title, details, id], (error, result) => {
    response.send(utils.createResponse(error, result))
  })
})

router.delete('/:id', (request, response) => {
  const { id } = request.params
  const statement = `delete from note  where id = ?`
  db.pool.query(statement, [id], (error, result) => {
    response.send(utils.createResponse(error, result))
  })
})

module.exports = router
