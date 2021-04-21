const Client = require("./client.dao");

//-------------------Client Create----------------------
exports.createClient = (req, res) => {
  const newClient = {
    email: req.body.email,
    password: bcrypt.hashSync(req.body.password),
    tipe: req.body.tipe,
  };

  Client.create(newClient, (err, client) => {
    if (err && err.code === 11000)
      return res.status(409).send("Email already exists");
    if (err) return res.status(500).send("Server error");
    //time expires Token   Expires in 24h
    const expiresIn = 24 * 60 * 60;
    //Generate token by Id
    const accessToken = jwt.sign({ id: client.id }, SECRET_KEY, {
      expiresIn: expiresIn,
    });
    const dataclient = {
      email: client.email,
      tipe: client.tipe,
      accessToken: accessToken,
      expiresIn: expiresIn,
    };
    // response
    res.send({ dataclient });
  });
};

//-------------------------Log In-------------------------------
exports.loginclient = (req, res, next) => {
  const clientData = {
    email: req.body.email,
    password: req.body.password,
  };
  client.findOne({ email: clientData.email }, (err, client) => {
    if (err) return res.status(500).send("Server error!");

    if (!client) {
      // email does not exist
      res.status(409).send({ message: "Something is wrong" });
    } else {
      //Compare encrypted password with entered password 
      const resultPassword = bcrypt.compareSync(
        clientData.password,
        client.password
      );
      if (resultPassword) {
        const expiresIn = 24 * 60 * 60;
        const accessToken = jwt.sign({ id: client.id }, SECRET_KEY, {
          expiresIn: expiresIn,
        });

        const dataclient = {
          email: client.email,
          tipe: client.tipe,
          accessToken: accessToken,
          expiresIn: expiresIn,
        };
        res.send({ dataclient });
      } else {
        // password wrong
        res.status(409).send({ message: "Something is wrong" });
      }
    }
  });
};

//-------------------------------------Bring clients------------------------
exports.getclients = (req, res) => {
  client.find(function (err, clients) {
    if (err) {
      console.log(err);
      return;
    }
    res.status(200).send({ clients });
  });
};

