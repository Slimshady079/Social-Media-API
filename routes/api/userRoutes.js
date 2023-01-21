const router = require("express").Router();

const {
  createUser,
  getUsers,
  getSingleUser,
  updateUser,
  removeUser,
  createFriend,
  removeFriend,
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
router.route("/:userId").get(getSingleUser).put(updateUser).delete(removeUser);

router.route("/:userId/friends/:friendId").post(createFriend).delete(removeFriend);

module.exports = router;
