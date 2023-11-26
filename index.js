const employee = {
    name: 'John Doe',
    streetAddress: '123 Main St',
  };
  
  // Function to update an employee with a new key-value pair (non-destructive)
  function updateEmployeeWithKeyAndValue(employee, key, value) {
    return {
      ...employee,
      [key]: value,
    };
  }
  
  // Function to update an employee with a new key-value pair (destructive)
  function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee;
  }
  
  // Function to delete a key from a clone of an employee (non-destructive)
  function deleteFromEmployeeByKey(employee, key) {
    const clone = { ...employee };
    delete clone[key];
    return clone;
  }
  
  // Function to delete a key from an employee (destructive)
  function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee;
  }
  
  module.exports = {
    employee,
    updateEmployeeWithKeyAndValue,
    destructivelyUpdateEmployeeWithKeyAndValue,
    deleteFromEmployeeByKey,
    destructivelyDeleteFromEmployeeByKey,
  };