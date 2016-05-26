var dateFormat = require('dateformat');

var NitUsers = require('../models/nitUsers');
var NitAL = require('../models/nitAuthLog');

var sendJSONresponse = function (res, status, content) {
    res.status(status);
    res.json(content);
};

module.exports.nitAccessUsers = function (req, res) {
    NitUsers.nitUsersInfo(function (data) {
        sendJSONresponse(res, 200, data);
    });
};

module.exports.nitAuthLog = function (req, res) {
    console.log('nitAuthLog req param: ', req.query);
    var now = new Date();
    var dateTo = (req.query.date_to) ? req.query.date_to : dateFormat(now, 'yyyy-mm-dd');
    var dateFrom = (req.query.date_from) ? req.query.date_from : dateFormat(now.setDate(now.getDate() - 7), 'yyyy-mm-dd');
    console.log('nitAuthLog dateFrom: ', dateFrom, ' to ', dateTo);
    NitAL.nitAuthLog(dateFrom, dateTo, req.query.employee_code, function (data) {
        sendJSONresponse(res, 200, data);
    });
};
