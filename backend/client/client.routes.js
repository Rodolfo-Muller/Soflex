const Client = require("./client.controller");
module.exports = (router) => {
  //-----------Client Create------------------
  router.post("/client/register", Client.createClients);
  //------------ Bring Client-----------------
  router.get("/client/all", Client.getClients);
  //------------ Update Client-----------------
  router.put("/client/:clientId", Client.updateClients);
  //------------ DeleteClient-----------------
  router.delete("/client/:clientId", Client.deleteClients);
};
