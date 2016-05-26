
var express = require('express');
var router = express.Router();

require('./employees').route(router);
require('./nitAccess').route(router);

module.exports = router;
