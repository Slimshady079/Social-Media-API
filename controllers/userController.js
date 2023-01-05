const { User, Thought } = require("../models");

const userController = {
  createUser({ body }, res) {
    // instead of req.body
    User.create(body).then((data) => res.json(data));
  },
};

module.exports = userController;
