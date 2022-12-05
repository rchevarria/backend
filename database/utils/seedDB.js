const { Employee, Task } = require('../models');

const seedDB = async () => {
	const dummyEmployee = await Employee.create({
		firstname: "John",
		lastname: "Doe",
		department: "Marketting"
	});
	const dummyEmployee2 = await Employee.create({
		firstname: "Jane",
		lastname: "Doe"
	});

	const dummyTask = await Task.create({
		description: "Data Entry",
        priority: "medium",
        completion: "false"
	});

	await dummyTask.setEmployee(dummyEmployee);
	
}

module.exports = seedDB;
