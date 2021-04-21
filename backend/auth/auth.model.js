const mongoose = require("mongoose");
const Schema = mongoose.Schema;
mongoose.set("useCreateIndex", true);
const userSchema = new Schema(
  {
    email: {
      type: String,
      required: true,
      trim: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      trim: true,
    },
    tipe: {
      type: String,
      enum: ["admin", "user"],
      default: "user",
      require: true,
    },
  },
  {
    //Time marks
    timestamps: true,
  }
);

module.exports = userSchema;
