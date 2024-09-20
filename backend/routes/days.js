const express = require('express');
const router = express.Router();

let checkedDays = {};

router.get('/api/checkedDays', (req, res) => {
  res.json(checkedDays);
});

router.post('/api/checkedDays', (req, res) => {
  const { day, checked } = req.body;
  checkedDays[day] = checked;
  res.json({ success: true });
});

module.exports = router;