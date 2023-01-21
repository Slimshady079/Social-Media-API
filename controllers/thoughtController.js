const { json } = require("express");
const { User, Thought } = require("../models");

const thoughtController = {
  createThought({ body }, res) {
    Thought.create(body)
      .then((thought) => {
        console.log("data: ", thought);
        return User.findOneAndUpdate(
          { _id: body.userId },
          { $push: { thoughts: thought._id } },
          { new: true }
        );
      })
      .then((data) => res.json(data));
  },
  getThoughts(req, res) {
    Thought.find()
      .then((thoughts) => res.json(thoughts))
      .catch((err) => res.status(500).json(err));
  },
  getSingleThoughts(req, res) {
    Thought.findOne({ _id: req.params.thoughtId })
      .select("-__v")
      .then((user) =>
        !user
          ? res.status(404).json({ message: "No user with that ID" })
          : res.json(user).catch((err) => res.status(500).json(err))
      );
  },
  addReaction(req, res) {
    Thought.findOneAndUpdate(
      { _id: req.params.thoughtId },
      { $addToSet: { reactions: req.body } },
      { runValidators: true, new: true }
    ).then((thoughts) => res.json(thoughts));
  },
  removeThought(req, res) {
    Thought.findOneAndRemove({ where: { _id: req.params.thoughtId } }).then(
      (data) => res.json(data)
    );
  },
  removeReaction(req, res) {
    Thought.findOneAndUpdate(
      { _id: req.params.thoughtId },
      { $pull: { reactions: { reactionId: req.params.reactionId } } },
      { runValidators: true, new: true }
    ).then((data) => res.json(data));
  },
  updateThought(req, res) {
    Thought.findOneAndUpdate(
      { _id: req.params.thoughtId },
      { $set: req.body },
      { runValidators: true, new: true }
    ).then((data) => res.json(data));
  },
};

module.exports = thoughtController;
