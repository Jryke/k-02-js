let numbers = [1, 90, 78, 3, 22, 187, 21]
let students = [{name:'Albert'},{name:'Bob'},{name:'Claudia'}]
let mix = [5, 'David', {name:'Ella'}, 23, 'Frank']

// 20101
const logNums = (arr) => {
	arr.forEach((el) => {
		console.log(el)
	})
}

logNums(numbers)

// 20102
const logNames = (arr) => {
	arr.forEach((el) => {
		console.log(el.name)
	})
}

logNames(students)

// 20103
const add1 = (arr) => {
	return arr.map(el => el + 1)
}

console.log(add1(numbers))

// 20104
const namesArr = (arr) => {
	// let newArr = []
	// arr.map((el) => {
	// 	newArr.push(el.name)
	// })
	return arr.map(el => el.name)
}

console.log(namesArr(students))

// 20105
const greaterThanEqual22 = (arr) => {
	return arr.filter(el => el >= 22)
}

console.log(greaterThanEqual22(numbers))

// 20106
const greaterThanParam = (arr, num) => {
	return arr.filter(el => el > num)
}

console.log(greaterThanParam(numbers, 70))

// 20107
const greaterThan6Chars = (arr) => {
	return arr.filter(el => el.name.length > 6)
}

console.log(greaterThan6Chars(students))

// 20108
const onlyStrings = (arr) => {
	return arr.filter(el => typeof(el) == "string")
}

console.log(onlyStrings(mix))

// 20109
const greaterThan100 = (arr) => {
	return arr.find(el => el > 100)
}

console.log(greaterThan100(numbers))

// 20110
const findName = (arr, name) => {
	return arr.find(el => el.name == name)
}

console.log(findName(students, 'Bob'))

// 20111
const sumOfAll = (arr) => {
	return arr.reduce((a, b) => a + b)
}

console.log(sumOfAll(numbers))

// 20112
const sumWithoutReduce = (arr) => {
	let sum = 0
	arr.forEach(el => sum += el)
	return sum
}

console.log(sumWithoutReduce(numbers))

// 20113
const diff = (arr) => {
	return arr.reduce((a, b) => a - b)
}

console.log(diff(numbers))

// 20114
const product = (arr) => {
	return arr.reduce((a, b) => a * b)
}

console.log(product(numbers))

// 20115
const descendingOrder = (arr) => {
	let arr2 = arr.slice()
	return arr2.sort((a, b) => b - a)
}

console.log(descendingOrder(numbers))

// 20116
const orderByLength = (arr) => {
	let newArr = arr.slice()
	return newArr.sort((a, b) => a.name.length - b.name.length)
}

console.log(orderByLength(students))

// 20118
const mergeInfo = (arr1, arr2) => {
	// arr1.forEach(el => {
	// 	let index = arr1.indexOf(el)
	// 	el.age = arr2[index]
	// })
	// return arr1
	return arr1.map( (s, i) => {
		return {
			name: s.name,
			age: arr2[i]
		}
	})
}

console.log(mergeInfo(students, numbers));

// 20119
const missingNum = (arr) => {
	// for(i = 0; i < arr.length; i++) {
	// 	if (arr[i+1] != arr[i] + 1) {
	// 		return arr[i] + 1
	// 	}
	// }
	arr.forEach( (e,i) => {
		if (e != arr[i-1] + 1) {
			return e - 1
		}
	})
}

console.log(missingNum([1, 2, 3, 4, 5, 7, 8, 9, 10]))

// 20120
const makeChange = (amount) => {
	// make return array
	let denomArr = []

	// while amount > 0, check if amount is larger than 10, if not, check 5 etc.
	// if amount is larger than denomination, subtract denomination from from amount and push denomination to the return array
	while (amount > 0) {
		if (amount >= 10) {
			denomArr.push(10)
			amount -= 10
		} else if (amount >= 5) {
			denomArr.push(5)
			amount -= 5
		} else if (amount >= 1) {
			denomArr.push(1)
			amount -= 1
		} else if (amount >= .5) {
			denomArr.push(0.5)
			amount -= .5
		} else if (amount >= .05) {
			denomArr.push(0.05)
			amount -= .05
		} else {
			denomArr.push(0.01)
			amount -= .01
		}
	}
	return denomArr
}

console.log(makeChange(27.58))

let makeChange2 = (amount, arr) => {
	let total = []
	arr.forEach(e => {
		while (amount >= e) {
			total.push(e)
			amount -= e
		}
	})
	if (amount = .01) {
		total.push(0.01)
	}
	return total
}

console.log(makeChange2(27.58, [10, 5, 1, 0.5, 0.05, 0.01]))
