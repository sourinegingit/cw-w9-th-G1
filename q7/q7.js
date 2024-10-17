const company = {
    employees: [
        { name: 'Ali', department: 'Sales' },
        { name: 'Sara', department: 'Marketing' },
        { name: 'Reza', department: 'Development' }
    ]
};
const {employees}=company;
console.log(employees);
employees.map(({name,department})=>{
    console.log(`name:${name}, department : ${department}`);
})