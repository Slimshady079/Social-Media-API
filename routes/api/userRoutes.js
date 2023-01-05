const router = require("express").Router();
const { createUser } = require("../../controllers/userController");

router.route("/").post(createUser);

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
// router.route("/userId").get(getSingleUser);
