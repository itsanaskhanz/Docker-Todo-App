const express = require('express');
const router = express.Router();

router.get('/get', (req, res) => {
  console.log("get all todos route hit");
});

router.post('/create', (req, res) => {
  console.log("create todo route hit");
});

router.put('/update/:id', (req, res) => {
  console.log(`update todo with id ${req.params.id} route hit`);
});

router.delete('/delete/:id', (req, res) => {
  console.log(`delete todo with id ${req.params.id} route hit`);
});

module.exports = router;
