const Client = require('./client.controller');
module.exports = (router) => {
  //-----------User Create------------------
  router.post('/register', Users.createUser);
   //-----------Admin Create------------------
   router.post('/registerAdmin', Users.createUser);
  //----------- User Login-------------------
  router.post('/login', Users.loginUser);
  //------------ Bring Users-----------------
  router.get ('/all', Users.getUsers);
}