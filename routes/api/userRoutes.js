const router = require("express").Router();
const {
  createUser,
  getUsers,
  getSingleUser,
} = require("../../controllers/userController");

// api/users
// creates a new user using post request
router.route("/").post(createUser);

// api/users
// gets all users using get request
router.route("/").get(getUsers).post(createUser);

// api/users/:userId
// gets a single user by their Id using get request
router.route("/:userId").get(getSingleUser);

module.exports = router;

// const {
//   createUser,
//   getUsers,
//   getSingleUser,
// } = require("../../controllers/userController");

// // api/users
// router.route("/").get(getUsers).post(createUser);

// // api/users/:userId
// // !! also get populated thought and friend data
