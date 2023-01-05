const { User, Thought } = require("../models");

const userController = {
  createUser({ body }, res) {
    // instead of req.body
    User.create(body)
      .then((data) => res.json(data))
      .catch((err) => res.status(500).json(err));
  },
  getUsers({ body }, res) {
    User.find()
      .then((users) => res.json(users))
      .catch((err) => res.status(500).json(err));
  },
};

module.exports = userController;

// getUsers(req, res) {
//   User.find()
//   .then((users) => res.json(users))
//   .catch((err) => res.status(500).json(err))
// }
