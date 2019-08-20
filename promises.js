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
