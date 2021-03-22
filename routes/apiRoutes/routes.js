const router = require('express').Router();
const fs = require("fs");
const express = require("express");
const { v4: uuidV4 } = require("uuid");

router.get("/notes", (req, res) => {
  res.json({hi: "joe"});
})


module.exports = router;
