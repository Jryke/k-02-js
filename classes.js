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
