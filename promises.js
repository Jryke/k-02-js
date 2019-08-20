// 020601
const brushTeeth = () => {
	return new Promise((res, rej) => {
	return setTimeout(() => res('ready'), 1000)
})}

const getUp = () => {
	return new Promise((res, rej) => {
	return setTimeout(() => res('awake'), 1000)
})}

const haveBreakfast = () => {
	return new Promise((res, rej) => {
	return setTimeout(() => res('eaten'), 2000)
})}

const haveShower = () => {
	return new Promise((res, rej) => {
	return setTimeout(() => res('showered'), 2000)
})}

getUp().then(response => {
	console.log(response)
	haveShower().then(response => {
		console.log(response)
		haveBreakfast().then(response => {
			console.log(response)
			brushTeeth().then(response => {
				console.log(response)
			})
		})
	})
})

// 020603
const makeCoffee = () => {
	return new Promise((res, rej) => {
		return setTimeout(() => res('coffee'), 10 * 1000)
	})
}

const makeEggs = () => {
	return new Promise((res, rej) => {
		return setTimeout(() => res('eggs'), 5 * 1000)
	})
}

const makeToast = () => {
	return new Promise((res, rej) => {
		return setTimeout(() => res('toast'), 6 * 1000)
	})
}

const makeBacon = () => {
	return new Promise((res, rej) => {
		return setTimeout(() => res('bacon'), 8 * 1000)
	})
}

Promise.all([makeCoffee(), makeEggs(), makeToast(), makeBacon()]).then(responses => console.log(`Breakfast is ready: ${responses}`))
