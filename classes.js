// 020501
let Car = class {
	constructor(make, model, color) {
		this.make = make
		this.model = model
		this.color = color
	}
}

let buildCar = (make, model, color) => {return new Car(make, model, color)}

let myCar = buildCar('Chevrolet', 'Bel-Air', 'Tropical Turquoise')

console.log(myCar)

// 020502
let names = ['Alice', 'Bernard', 'Catherine', 'David']
let jobs = ['Accountant', 'Biz Manager', 'Cleaner', 'Director']

let Employee = class {
	constructor (name, job) {
		this.name = name
		this.job = job
	}
}

let makeEmployees = (arr1, arr2) => {
	let employeesArr = []
	arr1.forEach((name, i) => {
		employeesArr.push(new Employee(name, arr2[i]))
	})
	return employeesArr
}

console.log(makeEmployees(names, jobs))
