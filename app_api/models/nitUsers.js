var sql = require('mssql');
var table = 'dbo.NGAC_USERINFO';

module.exports.nitUsersInfo = function (callback) {
    console.log('nitUserInfo: connection');
    sql.connect(require('../../app_config/config.json').mssqlConnection).then(function () {
        console.log('nitUserInfo: connected, querying');
        new sql.Request().query('select * from ' + table).then(function (recordset) {
            console.log('nitUserInfo: queried ', recordset.length, ' recs returned');
            sql.close();
            callback(recordset);
        });
    });
};

