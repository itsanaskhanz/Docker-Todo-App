const express = require('express');
const router = express.Router();

router.post('/signup', (req, res) => {
  console.log("signup route hit");
});

router.post('/login', (req, res) => {
  console.log("login route hit");
});

module.exports = router;
