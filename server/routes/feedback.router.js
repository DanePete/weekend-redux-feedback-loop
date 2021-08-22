const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

console.log('pool', pool);

// Get Feedback
router.get('/', (req, res) => {
  let queryText = 'SELECT * FROM "feedback"';
  pool.query(queryText).then(result => {
    // Sends back the results in an object
    console.log('result rows', result.rows);
    res.send(result.rows);
  })
  .catch(error => {
    console.log('error getting books', error);
    res.sendStatus(500);
  });
});

// POST FEEDBACK
router.post('/',  (req, res) => {
  let feedback = req.body;
  console.log(`Adding feedback`, feedback);

  let queryText = `INSERT INTO "books" ("author", "title")
                   VALUES ($1, $2);`;
  pool.query(queryText, [feedback.author, feedback.title])
    .then(result => {
      res.sendStatus(201);
    })
    .catch(error => {
      console.log(`Error adding new book`, error);
      res.sendStatus(500);
    });
});


module.exports = router;