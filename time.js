// 020401
const a = () => console.log('Hello')
const b = (func, num) => {
	setTimeout(func, num * 1000)
}

b(a, 3)
b(a, 5)

// 020402
let makeHelloInterval = () => {
	let seconds = 0

	let helloInterval = setInterval(() => {
		seconds++
		console.log('hello ' + seconds)
		if (seconds == 5) {
			clearInterval(helloInterval)
		}
	}
	, 1000)
}

makeHelloInterval()


// 020402 (alternative solution)
let makeHelloInterval2 = () => {
	setTimeout(() => clearInterval(interval), 6000)
	let seconds = 0
	let interval = setInterval(() => {
		seconds++
		console.log('Hello ' + seconds)}
		, 1000)
}

// makeHelloInterval2()
