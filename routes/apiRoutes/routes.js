const router = require('express').Router();
const fs = require("fs");
const express = require("express");
const { v4: uuidV4 } = require("uuid");

router.get('/notes', (req, res) => {
  res.json(JSON.parse(fs.readFileSync('./db/db.json', 'UTF-8')));
});

router.post('/notes', (req, res) => {
  const db = JSON.parse(fs.readFileSync('./db/db.json', 'UTF-8'));
  console.log(req.body);
  const note = req.body;
  note.id = uuidV4();

  db.push(note);

  fs.writeFileSync('./db/db.json', JSON.stringify(db));

  res.json(note);
});

module.exports = router;
