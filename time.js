// 020401
const a = () => console.log('Hello')
const b = (func, num) => {
	setTimeout(func, num * 1000)
}

b(a, 3)
b(a, 5)
