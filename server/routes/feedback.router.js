const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

// Get Feedback
router.get('/', (req, res) => {
  let queryText = 'SELECT * FROM "feedback"';
  pool.query(queryText).then(result => {
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
  let queryText = `INSERT INTO "feedback" ("feeling", "understanding", "support", "comments")
                   VALUES ($1, $2, $3, $4);`;
  pool.query(queryText, [feedback.howfeeling, feedback.understand, feedback.supported, feedback.comment])
    .then(result => {
      res.sendStatus(201);
    })
    .catch(error => {
      console.log(`Error adding new book`, error);
      res.sendStatus(500);
    });
});

// DELETE on /api/survey
router.delete('/:id', (req,res) => {
  const statement = `DELETE FROM feedback WHERE id = $1`;
  pool.query(statement, [req.params.id])
      .then((result) => {
          res.sendStatus(200);
          console.log('DELETE /api/survey successful');
          
      })
      .catch((error) => {
          console.log('DELETE /api/survey Error:', error);
          res.sendStatus(500);
      });
  }); 


module.exports = router;