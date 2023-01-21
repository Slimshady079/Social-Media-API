const router = require("express").Router();

const {
  createThought,
  getThoughts,
  getSingleThoughts,
  removeThought,
  addReaction,
  updateThought,
  removeReaction,
} = require("../../controllers/thoughtController");
const { remove } = require("../../models/User");

// creates a new thought using post
// api/thoughts
router.route("/").post(createThought).get(getThoughts);
// get all thoughts
router.route("/:thoughtId").get(getSingleThoughts).put(updateThought).delete(removeThought);
// adds reaction
router.route("/:thoughtId/reactions").post(addReaction);

router.route("/:thoughtId/reactions/:reactionId").delete(removeReaction);

module.exports = router;
