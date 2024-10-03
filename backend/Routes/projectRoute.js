const express = require("express");
const projectController = require("../Controllers/projectController");

const router= express.Router();

router.post("/add-project", projectController)

module.exports= router;

