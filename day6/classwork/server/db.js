const mysql = require('mysql2')

// connection pool
const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'root',
  port: 3306,
  database: 'notes_db',
  waitForConnections: true,
  connectionLimit: 10,
  maxIdle: 10,
  idleTimeout: 60000,
  queueLimit: 0,
  enableKeepAlive: true,
  keepAliveInitialDelay: 0,
})

module.exports = {
  pool,
}
