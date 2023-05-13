const express = require('express');
const router = express.Router();
const { Student } = require('../models/Model');

router.get('/students', async (req, res) => {
  try {
    const students = await Student.find().populate('subjects');
    res.status(200).json({
      status: 'success',
      data: {
        count: students.length,
        students: students
      }
    });
  } catch (err) {
    res.status(500).json({
      status: 'error',
      message: err.message
    });
  }
});

module.exports = router;
