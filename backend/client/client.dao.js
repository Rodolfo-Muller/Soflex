const mongoose = require('mongoose');
const clientSchema = require('./client.models');

clientSchema.statics = {
  create: function (data, cb) {
    const client = new this(data);
    client.save(cb);
  }
}

const clientModel = mongoose.model('Clients', clientSchema);
module.exports = clientModel;