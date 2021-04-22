const mongoose = require("mongoose");
const Schema = mongoose.Schema;
mongoose.set("useCreateIndex", true);

const clientSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
});

module.exports = clientSchema;
