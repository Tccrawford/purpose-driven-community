const { db } = require("../dbConnection.js")
const express = require('express')
const router = express.Router()

//Create Routes
router.post("/", async (req, res) => {
    try{
        console.log("req body", req.body);
        const response = await queryToInsertUsers(req.body)
        
        res.status(200).json(response);
    } catch(error){
        console.log( "error", error);
        res.status(500).json(error);
    }
})

//Read Routes
router.get("/", async (req, res) => {
    try {
      const response = await queryToFetchUsers();
      res.status(200).json(response);
    } catch (error) {
      res.status(500).json(error);
    }
  });
  
  router.get("/:email", async (req, res) => {
    const response = await queryToFetchUsers(req.params.email);
    res.status(200).json(response);
  });

  //Queries
  const queryToInsertUsers = (body) => {
    console.log("sequel query string", body)
    return db.manyOrNone(
      `
      INSERT INTO active_users (email, password, first_name, last_name)
      VALUES ($/email/, $/password/, $/firstname/, $/lastname/)
      RETURNING email
      `,
      { ...body }
    );
  }

  const queryToFetchUsers = (email) => {
    if (email === undefined) {
      return db.manyOrNone(
        'SELECT * FROM users'
      );
    } else {
      return db.oneOrNone(
        `SELECT * FROM users WHERE email = '${email}'`
      );
    }
  }
  

  module.exports = router