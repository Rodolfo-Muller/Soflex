//Import Dependencies
'use strict'
const cors = require('cors');
const express = require('express');
const authRoutes = require('./auth/auth.routes');
const propierties = require('./config/properties');
const DB = require('./config/db');
// Init DB
DB();

const app = express();
const router = express.Router();

//JSON Parser
const bodyParser = require('body-parser');
const bodyParserJSON = bodyParser.json();
const bodyParserURLEncoded = bodyParser.urlencoded({ extended: true });

app.use(bodyParserJSON);
app.use(bodyParserURLEncoded);

app.use(cors());

app.use('/api', router);

authRoutes(router);
router.get('/', (req, res) => {
  res.send('Hello from home');
});
app.use(router);
//Server listen at port 3000
app.listen(propierties.PORT, () => console.log(`Server runing on port ${propierties.PORT}`));

module.exports=app;