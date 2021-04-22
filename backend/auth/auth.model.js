const mongoose = require("mongoose");
const Schema = mongoose.Schema;
mongoose.set("useCreateIndex", true);

//---------Plugin generate Id--------------
var autoIncrement = require("mongoose-auto-increment");
autoIncrement.initialize(mongoose.connection); 

const userSchema = new Schema(  
  {
    userId: {
      type: Number,
      default: 0,
      unique: true,
    },
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
//configuración Auto-Incremental ID
userSchema.plugin(autoIncrement.plugin, {
  model: "User",
  field: "userId",
  startAt: 1,
  incrementBy: 1,
});

module.exports = userSchema;
