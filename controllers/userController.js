const { User, Thought } = require("../models");

const userController = {
  // creates a new users
  createUser({ body }, res) {
    // instead of req.body
    User.create(body)
      .then((data) => res.json(data))
      .catch((err) => res.status(500).json(err));
  },
  // gets all users
  getUsers({ body }, res) {
    User.find()
      .then((users) => res.json(users))
      .catch((err) => res.status(500).json(err));
  },
  // gets a single user
  getSingleUser(req, res) {
    User.findOne({ _id: req.params.userId })
      .select("-__v")
      // * what is populate? It broke my code.
      // .populate("posts")
      .then((user) =>
        !user
          ? res.status(404).json({ message: "No user with that ID" })
          : res.json(user)
      )
      .catch((err) => res.status(500).json(err));
  },
};

module.exports = userController;

// getUsers(req, res) {
//   User.find()
//   .then((users) => res.json(users))
//   .catch((err) => res.status(500).json(err))
// }
