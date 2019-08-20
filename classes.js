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

// 020503
let belts = ['white', 'yellow', 'orange', 'green', 'blue', 'brown', 'black']

let Karateka = class {
	constructor(name) {
		this.name = name
		this.belt = belts[0]
	}
	increaseRank(index) {
		this.belt = belts[index]
	}
}

let me = new Karateka('Jesse')

let fight = (fighter) => {
	let seconds = 0
	let makeFightInterval = setInterval(() => {
		seconds++
		let score = Math.round(Math.random() * 10)

		if (score > 8 && fighter.belt != 'black') {
			let index = belts.indexOf(fighter.belt)
			index++
			fighter.increaseRank(index)
		}

		console.log(`Score: ${score}`)
		console.log(fighter)

		if (seconds == 20) {
			clearInterval(makeFightInterval)
		}
	} , 1000)
}

fight(me)

// 020504
let foodNames = ['apples', 'bananas', 'bread', 'cookies', 'broccoli', 'onions']
let prices = [20, 12, 24, 53, 32, 15]
let discounts = [0, 0, 10, 25, 0, 5]

let Product = class {
	constructor(name, price) {
		this.name = name
		this.price = price
	}
	applyDiscount(discount) {
		this.price = this.price - (this.price * (discount / 100))
	}
}

let productArr = []
foodNames.forEach((food, i) => {
	let obj = new Product(food, prices[i])
	obj.applyDiscount(discounts[i])
	productArr.push(obj)
})

let Receipt = class {
	constructor(products) {
		this.products = products
	}
	calcTotal(products) {
		let total = 0
		this.products.forEach((product) => {
			total += product.price
		})
		return total
	}
}

const getReceipt = (names, prices, discounts) => {
	let newProductArr = names.map((name, i) => {
		return new Product(name, prices[i])
	})

	newProductArr.forEach((product, i) => {
		product.applyDiscount(discounts[i])
	})

	let newReceipt = new Receipt(productArr)
	console.log(newReceipt)
	console.log(newReceipt.calcTotal())
}

// getReceipt(foodNames, prices, discounts)

const getReceiptFormatted = (names, prices, discounts) => {
	let newProductArr = names.map((name, i) => {
		return new Product(name, prices[i])
	})

	let newReceipt = new Receipt(productArr)
	console.log('-----------------------')

	productArr.forEach(product => {
		let formattedName = product.name
		while (formattedName.length < 10) {
			formattedName += ' '
		}
		console.log(`| ${formattedName} | $${product.price.toFixed(2)} |`)
	})

	console.log('-----------------------')
	console.log(`| Total      | $${newReceipt.calcTotal()} |`)
	console.log('-----------------------')
}

getReceiptFormatted(foodNames, prices, discounts)
