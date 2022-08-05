//Dependencies
// const path = require('path')

//Configuration
require('dotenv').config()

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
    host:   "localhost",
    port:   "5432",
    database:   "purpose_driven_community",
    user:    "postgres",
    password:   "taytay18",
    // ssl: {
    //     rejectUnauthorized: false,
    // },
}

const db = pgp(cn)
console.log("db", db)
db.connect()
    .then(obj => {
        console.log("i made it here")
        obj.done();
    })
    .catch(error => {
        console.log('ERROR FROM DB:=====>\n', error.message)
    })

module.exports = {db,pgp}
