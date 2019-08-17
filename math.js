let products = [{name:'bread',price:3.5},{name:'orange',price:1.3},{name:'gum',price:2.8}]

// 20201
const removeDecimals = (num) => {
	return Math.round(num)
}

console.log(removeDecimals(3.14))
console.log(removeDecimals(15.9))

// 20202
const roundPrices = (arr) => {
	return arr.map(el => {
		return {
			name: el.name,
			price: Math.round(el.price)
		}
	})
}

console.log(roundPrices(products))

// 20203
const roundToGivenDecimal = (a,b) => {
	return a.toFixed(b)
}

console.log(roundToGivenDecimal(1.2345667, 2))
console.log(roundToGivenDecimal(1.2345667, 4))

// 20204
const calculateExponent = (a,b) => {
	return Math.pow(a,b)
}

console.log(calculateExponent(2,3))

// 20205
const makeRandomNumber = () => {
	return Math.round(Math.random() * 10)
}

console.log(makeRandomNumber())

// 20206
const makeRandomNumber2 = (num) => {
	return Math.round(Math.random() * num)
}

console.log(makeRandomNumber2(7))
