const mongoose = require("mongoose");

const ApiSchema = new mongoose.Schema({
  quote: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("ApiS", ApiSchema);
