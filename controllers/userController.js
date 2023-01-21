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
      .then((user) =>
        !user
          ? res.status(404).json({ message: "No user with that ID" })
          : res.json(user)
      )
      .catch((err) => res.status(500).json(err));
  },
  updateUser(req, res) {
    User.findOneAndUpdate(
      { _id: req.params.userId },
      { $set: req.body },
      { runValidators: true, new: true }
    ).then((data) => res.json(data));
  },
  removeUser(req, res) {
    User.findOneAndDelete({ _id: req.params.userId }).then((data) =>
      res.json(data)
    );
  },
  createFriend(req, res) {
    User.findOneAndUpdate(
      { _id: req.params.userId },
      { $addToSet: { friends: req.params.friendId } },
      { new: true }
    ).then((data) => res.json(data));
  },
  removeFriend(req, res) {
    User.findOneAndUpdate(
      { _id: req.params.userId },
      { $pull: { friends: req.params.friendId } },
      { new: true }
    ).then((data) => res.json(data));
  },
};

module.exports = userController;

// getUsers(req, res) {
//   User.find()
//   .then((users) => res.json(users))
//   .catch((err) => res.status(500).json(err))
// }
