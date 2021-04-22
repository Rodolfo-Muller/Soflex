const Client = require('./client.controller');
module.exports = (router) => {
  //-----------Client Create------------------
  router.post('/client/register', Client.createClients);
  //------------ Bring Client-----------------
  router.get ('/client/all', Client.getClients);
    //------------ Update Client-----------------
  router.put ('/client/:client', Client.updateClients);
}