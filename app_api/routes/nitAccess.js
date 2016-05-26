
var ctrlNitAccess = require('../controllers/nitAccess');

module.exports.route = function(router) {
    router.get('/nit-access-users/', ctrlNitAccess.nitAccessUsers);
    router.get('/nit-auth-log/', ctrlNitAccess.nitAuthLog);
};

//
// var ctrlEmployees = require('../controllers/employees');
// var ctrlEmpTrans = require('../controllers/empTrans');
//
// module.exports.route = function(router) {
//     // employees
//     router.get('/employees', ctrlEmployees.employeesList);
//     router.post('/employees', ctrlEmployees.employeesCreate);
//     router.get('/employees/:employeeid', ctrlEmployees.employeesReadOne);
//     router.put('/employees/:employeeid', ctrlEmployees.employeesUpdateOne);
//     router.delete('/employees/:employeeid', ctrlEmployees.employeesDeleteOne);
//
//     // empTrans
//     router.post('/employees/:employeeid/empTrans', ctrlEmpTrans.empTransCreate);
//     router.get('/employees/:employeeid/empTrans/:empTranid',ctrlEmpTrans.empTransReadOne);
//     router.put('/employees/:employeeid/empTrans/:empTranid',ctrlEmpTrans.empTransUpdateOne);
//     router.delete('/employees/:employeeid/empTrans/:empTranid',ctrlEmpTrans.empTransDeleteOne);
//
// }
