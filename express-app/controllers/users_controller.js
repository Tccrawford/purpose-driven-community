const { db } =-require("../dbConnection")
const express = require('express')
const users = express.Router

//Create Routes
users.post("/", async (req, res) => {
    try{
        console.log("req body", req.body);
        const response = await queryToInsertUsers(req.body)
        res.status(200).json(response);
    } catch(error){
        res.status(500).json(error);
    }
})

//Read Routes
users.get("/", async (req, res) => {
    try {
      const response = await queryToFetchUsers();
      res.status(200).json(response);
    } catch (error) {
      res.status(500).json(error);
    }
  });
  
  users.get("/:email", async (req, res) => {
    const response = await queryToFetchUsers(req.params.email);
    res.status(200).json(response);
  });

  //Queries
  const queryToInsertUsers = (body) => {
    //console.log(body)
    return db.one(
      `
      INSERT INTO users (email, password, firstname, lastname)
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
  

  module.exports = users