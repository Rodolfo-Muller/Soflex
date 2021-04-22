const Client = require("./client.dao");

//-------------------Client Create----------------------
exports.createClients = (req, res) => {
  const newClient = req.body;

  Client.create(newClient, (err, client) => {
    if (!newClient){
        return res.status(400).send("Missing Parameters")
    }if(err){
        console.log(err)
    }
    res.status(200).send({newClient});
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
exports.updateClients=(req,res)=>{
    const client = req.params;

    Client.update(client)
    .then(() => {
        res.status(200).send({ msg: "Ok" });
      })
      .catch((err) => {
        console.log(err);
      });
}