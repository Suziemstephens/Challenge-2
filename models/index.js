const User = require('./User');

<<<<<<< HEAD
Employee.hasMany(TimeSheet, {
  foreignKey: 'employee_id',
});

TimeSheet.belongsTo(Employee, {
  foreignKey: 'employee_id',
});

module.exports = { Employee, TimeSheet };
=======
module.exports = { User };
>>>>>>> b00f8d9dc5c2ad37ae004bea658c080e24a7c591
