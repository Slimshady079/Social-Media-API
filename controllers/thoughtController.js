const { User, Thought } = require("../models");

const thoughtController = {
  createThought({ body }, res) {
    Thought.create(body)
      .then((thought) => res.json(thought))
      .catch((err) => res.status(500).json(err));
  },
};

module.exports = thoughtController;
