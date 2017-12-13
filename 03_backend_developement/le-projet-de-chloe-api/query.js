const { Pool } = require('pg')
const pool = new Pool()


pool.connect((err, client, release) => {
  if (err) {
    return console.error('Error acquiring client', err.stack)
  }
  client.query("INSERT INTO products (id) VALUES ('53ec2ebf-25aa-4c65-8a75-8f744e819362')", (err, result) => {
    release()
    if (err) {
      return console.error('Error executing query', err.stack)
    }
    console.log(result.rows)
  })
})
