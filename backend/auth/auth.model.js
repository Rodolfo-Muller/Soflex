const mongoose = require('mongoose');
const Schema = mongoose.Schema;
mongoose.set('useCreateIndex', true);
const userSchema = new Schema({
  email: {
    type: String,
    required: true,
    trim: true,
    unique: true
  },
  password: {
    type: String,
    required: true,
    trim: true
  },
  tipo: {
    type: String,
    enum: ["admin", "usuario"],
    default: "usuario",
    require: true
  },
}, {
    timestamps: true
  });

module.exports = userSchema;