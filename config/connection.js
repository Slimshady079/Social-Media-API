const mongoose = require("mongoose");

// Wrap Mongoose around local connection to MongoDB
// * does this make socialMediaDB or do I still have to make it? 
mongoose.connect("mongodb://127.0.0.1:27017/socialMediaDB", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Export connection
module.exports = mongoose.connection;
