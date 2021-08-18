const express = require("express");
const fibonacci = require("../utils/fibonacci.utils");
const router = new express.Router();

router.get("/fibonacci/:index", (req, res) => {
  const indexNumber = parseInt(req.params.index, 10);
  res.json(fibonacci(indexNumber));
});

module.exports = router;
