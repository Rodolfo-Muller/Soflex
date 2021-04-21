const mongoose = require('mongoose');
const dbURL = require('./properties').DB;

module.exports = () => {
  mongoose.connect(dbURL, { useNewUrlParser: true })
    .then(() => console.log(`Mongo connected on ${dbURL}`))
    .catch(err => console.log(`Connection has error ${err}`))

  process.on('SIGINT', () => {
    mongoose.connection.close(() => {
      console.log(`Mongo is disconnected`);
      process.exit(0)
    });
  });
}

//--------------------Super User-------------------
const User = require("../auth/auth.dao");
//Encryp Password
const bcrypt = require("bcryptjs");

const newAdmin = {
  email: "admin@admin.com",
  password: bcrypt.hashSync("admin"),
  tipe: "admin",
};
User.findOneAndUpdate(newAdmin,(err, admin) =>{
    // callback
    if (err) {
      console.log(err);
    } else {
      console.log(
        "\n----Super-user---- \n ",
        "\n #email: ",
        admin.email,
        "\n #password: ",
        admin.password,
        "\n #tipe: ",
        admin.tipe,
        "\n -----------------\n"
      );
    }
  }
);