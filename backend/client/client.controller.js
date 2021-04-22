const Client = require("./client.dao");

//-------------------Client Create----------------------
exports.createClients = (req, res) => {
  const newClient = req.body;

  Client.create(newClient, (err, client) => {
    if (!newClient) {
      return res.status(400).send("Missing Parameters");
    }
    if (err) {
      console.log(err);
    }
    res.status(200).send({ newClient });
  });
};

//-------------------------------------Bring clients------------------------
exports.getClients = (req, res) => {
  Client.find(function (err, clients) {
    if (err) {
      console.log(err);
      return;
    }
    res.status(200).send({ clients });
  });
};

//---------------------------------Update Clients----------------------------
exports.updateClients = (req, res) => {
  const { clientId } = req.params;
  const { name } = req.body;

  Client.findOneAndUpdate({ clientId: clientId }, { name: name })
    .then((client) => {
      res.status(200).send({ msg: "Ok", client: client });
    })
    .catch((err) => {
      console.log(err);
    });
};

//---------------Delete Clients-----------------
exports.deleteClients = (req, res) => {
  const { clientId } = req.params;

  Client.deleteOne({ clientId: clientId }, function (err, deleted) {
    if (deleted.deletedCount === 0) {
      res.status(400).send("Error");
      return;
    } else {
      res.status(200).send("Client deleted corectly");
    }
  });
};
