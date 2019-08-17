let phrase = 'JavaScript is the best'
let prices = ['$22', '€99', '$75', '£80', '€43', '$22']
let names = ['anna', 'john', 'bob', 'frank']

// 20301
const reverseWords = (str) => {
	let wordArr = str.split(' ')
	let reverseWordArr = wordArr.map(word => {
		return word.split('').reverse().join('')
	})
	return reverseWordArr.join(' ')
}

console.log(reverseWords(phrase))

// 20302
const convertPrices = (arr) => {
	return arr.map(price => {
		return {
			currency: price[0],
			value: price.slice(1)
		}
	})
}

console.log(convertPrices(prices))

// 20303
const filterPalindromes = (arr) => {
	return arr.filter(str => {
		return str == str.split('').reverse().join('')
	})
}

console.log(filterPalindromes(names))

// 20304
const makeRomanNumerals = (num) => {
	let romNumArray = []
	let indDigits = num.toString().split('').reverse()
	console.log(indDigits)
	switch(indDigits[0]) {
		case '1':
			romNumArray.push('I');
			break;
		case '2':
			romNumArray.push('II');
			break;
		case '3':
			romNumArray.push('III');
			break;
		case '4':
			romNumArray.push('IV');
			break;
		case '5':
			romNumArray.push('V');
			break;
		case '6':
			romNumArray.push('VI');
			break;
		case '7':
			romNumArray.push('VII');
			break;
		case '8':
			romNumArray.push('VIII');
			break;
		case '9':
			romNumArray.push('IX');
			break;
	}

	switch(indDigits[1]) {
		case '1':
			romNumArray.push('X');
			break;
		case '2':
			romNumArray.push('XX');
			break;
		case '3':
			romNumArray.push('XXX');
			break;
		case '4':
			romNumArray.push('XL');
			break;
		case '5':
			romNumArray.push('L');
			break;
		case '6':
			romNumArray.push('LX');
			break;
		case '7':
			romNumArray.push('LXX');
			break;
		case '8':
			romNumArray.push('LXXX');
			break;
		case '9':
			romNumArray.push('XC');
			break;
	}

	switch(indDigits[2]) {
		case '1':
			romNumArray.push('C');
			break;
		case '2':
			romNumArray.push('CC');
			break;
		case '3':
			romNumArray.push('CCC');
			break;
		case '4':
			romNumArray.push('CD');
			break;
		case '5':
			romNumArray.push('D');
			break;
		case '6':
			romNumArray.push('DC');
			break;
		case '7':
			romNumArray.push('DCC');
			break;
		case '8':
			romNumArray.push('DCCC');
			break;
		case '9':
			romNumArray.push('CM');
			break;
	}

	switch(indDigits[3]) {
		case '1':
			romNumArray.push('M');
			break;
		case '2':
			romNumArray.push('MM');
			break;
		case '3':
			romNumArray.push('MMM');
			break;
	}
	return romNumArray.reverse().join('')
}

console.log(makeRomanNumerals(479))

// const makeRomanNumerals2 = (num) => {
// 	const romanNumeralRef = [
// 		{I: 1},
// 		{V: 5},
// 		{X: 10},
// 		{L: 50},
// 		{C: 100},
// 		{D: 500},
// 		{M: 1000}
// 	]
//
// }

// 20305
const makeFizzBuzz = () => {
	for (i = 0; i <= 20; i++) {
		if (i % 3 == 0 && i % 5 == 0) {
			console.log('fizzbuzz')
		} else if (i % 3 == 0) {
			console.log('fizz')
		} else if (i % 5 == 0) {
			console.log('buzz')
		} else {
			console.log(i)
		}
	}
}

makeFizzBuzz()

// 20306
const a = (num1, num2) => {
	return num1 + num2
}

const b = (func, num1, num2, num3) => {
	return a(num1, num2) - num3
}

console.log(b(a, 10, 2, 3))
