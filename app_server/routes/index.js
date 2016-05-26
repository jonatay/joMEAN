var express = require('express');
var router = express.Router();
var ctrlEmployees = require('../controllers/employees');
var ctrlOthers = require('../controllers/others');

/* Employees pages */
router.get('/', ctrlEmployees.homelist);
router.get('/employee', ctrlEmployees.employeeInfo);
router.get('/employee/review/new', ctrlEmployees.addReview);

/* Other pages */

router.get('/about', ctrlOthers.about);

module.exports = router;