const mongoose = require("mongoose");
const daySchema = new mongoose.Schema({
  day: { type: string, required: true },
  checked: { type: boolean, required: true },
});
module.exports = mongoose.model("Days", daySchema);
