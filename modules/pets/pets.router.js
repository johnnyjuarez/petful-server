const express = require('express');
const json = require('body-parser').json();

const Pets = require('./pets.service');
const People = require('../people/people.service');

const router = express.Router();

router.get('/', (req, res) => {
  // Return all pets currently up for adoption.
  let results = Pets.get();
  res.json(results);
});

router.delete('/', json, (req, res) => {
  // Remove a pet from adoption.
  const { type } = req.body;
  Pets.dequeue(type);
  People.dequeue();
  res.status(204).end();
});

module.exports = router;
