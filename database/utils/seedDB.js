const { Employee, Task } = require('../models');

const seedDB = async () => {
	const dummyEmployee = await Employee.create({
		firstname: "Melissa",
		lastname: "Lynch",
		department: "Computer Science"
	});
	const dummyEmployee2 = await Employee.create({
		firstname: "Kim",
		lastname: "Kardashian"
	});

	const dummyTask = await Task.create({
		title: "CSCI 39548",
        location: "C107",
        timeslot: "W 5:35 - 8:15 PM"
	});

	await dummyTask.setEmployee(dummyEmployee);
	
}

module.exports = seedDB;
