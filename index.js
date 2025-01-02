// Write your solution in this file!
const employee = {
    name: "Jonathan",
    streetAddress: "123 Fake Street"
}; 

function updateEmployeeWithKeyAndValue (employee, key, value) {
    return {...employee, ...{ [key] : value } }
}

function destructivelyUpdateEmployeeWithKeyAndValue (employee, key, value) {
    employee[key] = value;
    return employee;
}


function deleteFromEmployeeByKey (employee, key) {
    const employeeUpdate = {...employee}
    delete employeeUpdate[key]
    return employeeUpdate;
}

function destructivelyDeleteFromEmployeeByKey (employee, key) {
    delete employee[key];

    return employee;
}
