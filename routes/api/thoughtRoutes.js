const router = require("express").Router();

const { createThought } = require("../../controllers/thoughtController");

// creates a new thought using post
// api/thoughts
router.route("/").post(createThought);

module.exports = router;
