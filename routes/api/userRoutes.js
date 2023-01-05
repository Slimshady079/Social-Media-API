const router = require("express").Router();

const {
  createUser,
  getUsers,
  getSingleUser,
} = require("../../controllers/userController");

// creates a new user using post request
// api/users
router.route("/").post(createUser);

// gets all users using get request
// api/users
router.route("/").get(getUsers).post(createUser);

// gets a single user by their Id using get request
// api/users/:userId
// !! also get populated thought and friend data
router.route("/:userId").get(getSingleUser);

module.exports = router;