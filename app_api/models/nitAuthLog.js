var sql = require('mssql');

module.exports.nitAuthLog = function (dateFrom, dateTo, employeeCode, callback) {
    var qry = "SELECT " +
        "ui.EmployeeNum, ui.Name, al.* " +
        "FROM dbo.NGAC_AUTHLOG al " +
        "JOIN dbo.NGAC_USERINFO ui on ui.ID = al.UserId " +
        "WHERE TransactionTime BETWEEN @date_from AND @date_to ";

    sql.connect(require('../../app_config/config.json').mssqlConnection).then(function () {
        if (employeeCode) {
            qry += "AND ui.EmployeeNum = @employee_code";
        }
        console.log('nitAuthLog: connected, querying ', qry);
        new sql
            .Request()
            .input('date_from', dateFrom)
            .input('date_to', dateTo)
            .input('employee_code', employeeCode)
            .query(qry)
            .then(function (recordset) {
                console.log('nitAuthLog: queried ', recordset.length, ' recs returned');
                sql.close();
                callback(recordset);
            })
            .catch(function (err) {
                console.dir(err);
            });
    });
}

