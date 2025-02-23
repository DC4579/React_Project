const express = require('express');
const router = express.Router();
const Fact = require('../models/Fact');

// Get all facts
router.get('/', async (req, res) => {
  const facts = await Fact.find();
  res.json(facts);
});

// Add a new fact
router.post('/', async (req, res) => {
  const { category, content } = req.body;
  const newFact = new Fact({ category, content });
  await newFact.save();
  res.json(newFact);
});

module.exports = router;
