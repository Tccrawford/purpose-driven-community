//Dependencies
const path = require('path')

//Configuration
require('dotenv').config({path: '../.env'})

const initOptions = {
    capSQL: true,
    error(error, e) {
      if (e.cn) {
          console.log('CN:', e.cn);
        console.log('EVENT:', error.message || error);
      }
    },
    query(e) {
      console.log(e.query);
    },
  };

const pgp = require('pg-promise')(initOptions)

const cn = {
    host:   process.env.DB_HOST,
    port:   process.env.DB_PORT,
    database:   process.env.DB_DATABASE,
    user:    process.env.DB_USER,
    password:   process.env.DB_PASSWORD,
    ssl: {
        rejectUnauthorized: false,
    },
}

const db = pgp(cn)

db.connect()
    .then(obj => {
        obj.done();
    })
    .catch(error => {
        console.log('ERROR FROM DB:=====>\n', error.message)
    })

module.exports = {db,pgp}
