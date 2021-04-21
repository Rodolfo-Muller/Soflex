const User = require("./auth.dao");
//Encryp Password
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const SECRET_KEY = "secretkey123456";

//-------------------User Create----------------------
exports.createUser = (req, res) => {
  const newUser = {
    email: req.body.email,
    password: bcrypt.hashSync(req.body.password),
    tipe: req.body.tipe,
  };

  User.create(newUser, (err, user) => {
    if (err && err.code === 11000)
      return res.status(409).send("Email already exists");
    if (err) return res.status(500).send("Server error");
    //time expires Token   Expires in 24h
    const expiresIn = 24 * 60 * 60;
    //Generate token by Id
    const accessToken = jwt.sign({ id: user.id }, SECRET_KEY, {
      expiresIn: expiresIn,
    });
    const dataUser = {
      email: user.email,
      tipe: user.tipe,
      accessToken: accessToken,
      expiresIn: expiresIn,
    };
    // response
    res.send({ dataUser });
  });
};

//-------------------------Log In-------------------------------
exports.loginUser = (req, res, next) => {
  const userData = {
    email: req.body.email,
    password: req.body.password,
  };
  User.findOne({ email: userData.email }, (err, user) => {
    if (err) return res.status(500).send("Server error!");

    if (!user) {
      // email does not exist
      res.status(409).send({ message: "Something is wrong" });
    } else {
      //Compare encrypted password with entered password 
      const resultPassword = bcrypt.compareSync(
        userData.password,
        user.password
      );
      if (resultPassword) {
        const expiresIn = 24 * 60 * 60;
        const accessToken = jwt.sign({ id: user.id }, SECRET_KEY, {
          expiresIn: expiresIn,
        });

        const dataUser = {
          email: user.email,
          tipe: user.tipe,
          accessToken: accessToken,
          expiresIn: expiresIn,
        };
        res.send({ dataUser });
      } else {
        // password wrong
        res.status(409).send({ message: "Something is wrong" });
      }
    }
  });
};

//-------------------------------------Bring Users------------------------
exports.getUsers = (req, res) => {
  User.find(function (err, users) {
    if (err) {
      console.log(err);
      return;
    }
    res.status(200).send({ users });
  });
};
