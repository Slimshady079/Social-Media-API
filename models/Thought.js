const { Schema, model } = require("mongoose");

const thoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: true,
      minLength: 1,
      maxLength: 280,
    },
    createdAt: {
      type: Date,
      default: Date.now,
      // !! use a getter method to format the timestamp on query
    },
    // the user that created this thought
    username: {
      type: String,
      required: true,
    },
    // these are like replies
    reactions: [
      {
        // !! array of nested documents created with the reactionSchema
      },
    ],
  },
  {
    // Here we are indicating that we want virtuals to be included with our response, overriding the default behavior
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);

// Create a virtual called reactionCount that retrieves the length of the thought's reactions array field on query.
thoughtSchema
  .virtual("reactionCount")
  // Getter
  // !! finish virtual
  .get();
