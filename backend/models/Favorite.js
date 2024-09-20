const mongoose = require("mongoose");

const favoriteSchema = new mongoose.Schema({
  pattern: String,
});
module.exports = mongoose.model("Favorite", favoriteSchema);
