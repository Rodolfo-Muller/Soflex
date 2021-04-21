const mongoose = require("mongoose");
const Schema = mongoose.Schema;
mongoose.set("useCreateIndex", true);

var autoIncrement = require("mongoose-auto-increment"); //no modificar
autoIncrement.initialize(mongoose.connection); //no modificar

const clientSchema = new Schema({
  clientId: {
    type: Number,
    default: 0,
    unique: true,
  },
  name: {
    type: String,
    required: true,
    trim: true,
  },
});

//configuración Auto-Incremental ID
clienteSchema.plugin(autoIncrement.plugin, {
  model: "Client",
  field: "clientId",
  startAt: 1,
  incrementBy: 1,
});

module.exports = clientSchema;
