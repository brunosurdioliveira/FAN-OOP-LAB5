// Lab 5 JavaScript
/*
    Name: Bruno Surdi Oliveira
    Date: July 2020
    Purpose: Lab 5
*/

// global variables to keep display state
let consolesFlag = false;
let gamesFlag = false;

// console constructor function
class Console {
	constructor(name, pG, vR, bluRay, price) {
		this._name = name;
		this._pG = pG;
		this._vR = vR;
		this._bluRay = bluRay;
		this._price = price;
	}

	get name() {
		return this._name;
	}

	get pG() {
		return this._pG;
	}

	get vR() {
		return this._vR;
	}

	get bluRay() {
		return this._bluRay;
	}

	get price() {
		return this._price;
	}
}

// game constructor function
class Game {
	constructor(name, xbox1, pS4, nSwitch, genre) {
		this._name = name;
		this._xbox1 = xbox1;
		this._pS4 = pS4;
		this._nSwitch = nSwitch;
		this._genre = genre;
	}

	get name() {
		return this._name;
	}

	get xbox() {
		return this._xbox1;
	}

	get pS4() {
		return this._pS4;
	}

	get nintendoSwith() {
		return this._nSwitch;
	}

	get genre() {
		return this._genre;
	}
}

// helper function toggles console table visibility
function toggleConsoles() {
	if (consolesFlag) {
		consolesFlag = false;
		document.getElementById("consoles").style.visibility = "hidden";
	}
	else {
		consolesFlag = true;
		document.getElementById("consoles").style.visibility = "visible";
	}
}

// helper function toggles console table visibility
function toggleGames() {
	if (gamesFlag) {
		gamesFlag = false;
		document.getElementById("games").style.visibility = "hidden";
	}
	else {
		gamesFlag = true;
		document.getElementById("games").style.visibility = "visible";
	}
}

// initialization function builds both tables
function init() {
	// create the empty consoles array
	let consoles = [];

	// build the console array
	let consoleOne = new Console('Microsoft Xbox One', 'No', 'No', 'Yes', 299.99);
	let consoleTwo = new Console('Nintendo Switch', 'Yes', 'No', 'Yes', 399.99);
	let consoleThree = new Console('Sony PlayStation 4', 'No', 'Yes', 'No', 299.99);
	
	// Add the consoles to the consoles array
	consoles.push(consoleOne, consoleTwo, consoleThree);

	// Test the getter methods
	console.log(consoleOne.name + " " + consoleOne.price + " " + consoleOne.pG + " " + consoleOne.vR + " " + consoleOne.bluRay);
	console.log(consoleTwo.name + " " + consoleTwo.price);
	console.log(consoleThree.name + " " + consoleThree.price);

	// get a reference to the consoles table
	let table = document.getElementById("consoles");

	// create a new row at the end of the table
	let row = table.insertRow(-1);

	// create set of row cells and associated reference variables
	// for the 5 headings
	var headName = row.insertCell(0); // it is not possible to change to let
	let headpG = row.insertCell(1);
	let headvR = row.insertCell(2);
	let headBluRay = row.insertCell(3);
	let headPrice = row.insertCell(4);

	// insert the heading values into the cells
	headName.innerHTML = '<h3>Name</h3>';
	headpG.innerHTML = '<h3>Portable Gaming</h3>';
	headvR.innerHTML = '<h3>Virtual Reality</h3>';
	headBluRay.innerHTML = '<h3>UHD Blu-ray Player</h3>';
	headPrice.innerHTML = '<h3>Price</h3>';

	// traverse the consoles array adding row data
	for (let i = 0; i < consoles.length; i++) {
		// create a new row at the end of the table
		row = table.insertRow(-1);

		// create set of row cells and associated reference variables
		// for the 5 properties in the current row
		let name = row.insertCell(0);
		let pG = row.insertCell(1);
		let vR = row.insertCell(2);
		let bluRay = row.insertCell(3);
		let price = row.insertCell(4);

		// insert the row values into the cells (Using getter methods)
		name.innerHTML = consoles[i].name;
		pG.innerHTML = consoles[i].pG;
		vR.innerHTML = consoles[i].vR;
		bluRay.innerHTML = consoles[i].bluRay;
		price.innerHTML = '$' + consoles[i].price;
	}

	// create the empty games array
	let games = [];

	// build the games array
	let game1 = new Game('The Elder Scrolls V: Skyrim', 'Yes', 'Yes', 'Yes', 'Role-playing');
	let game2 = new Game('Super Mario Odyssey', 'No', 'No', 'Yes', 'Platform');
	let game3 = new Game('Cuphead', 'Yes', 'No', 'No', 'Run and Gun');
	let game4 = new Game('Desting 2', 'Yes', 'Yes', 'No', 'Run and Gun');
	let game5 = new Game('Cuphead', 'Yes', 'No', 'No', 'First-person shooter');
	let game6 = new Game('Horizon Zero Dawn', 'No', 'Yes', 'No', 'Role-playing');
	let game7 = new Game('The Legend of Zelda: Breath of the Wild', 'No', 'No', 'Yes', 'Action-adventure');
	let game8 = new Game('Playerunknown\'s Battlegrounds', 'Yes', 'No', 'No', 'Battle Royale');
	//or
	//games.push(new Game("Playerunknown's Battlegrounds", "Yes", "No", "No", "Battle Royale"));
	let game9 = new Game('Resident Evil 7', 'Yes', 'Yes', 'No', 'Survival');
	let game10 = new Game('Injustice 2', 'Yes', 'Yes', 'No', 'Fighting');
	let game11 = new Game('Call of Duty: WWII', 'Yes', 'Yes', 'No', 'First-person shooter');

	// Add the games to the games array
	games.push(game1, game2, game3, game4, game5, game6, game7, game8, game9, game10, game11);

	// test getter methods
	games.forEach(game => {
		console.log(game.name + ". " + game.xbox + ". " + game.pS4 + ". " + game.nintendoSwith + ". " + game.genre + ".")
	});

	// get a reference to the games table
	table = document.getElementById("games");

	// create a new row at the end of the table
	row = table.insertRow(-1);

	// create set of row cells and associated reference variables
	// for the 5 headings
	var headName = row.insertCell(0);
	let headXbox = row.insertCell(1);
	let headPS4 = row.insertCell(2);
	let headSwitch = row.insertCell(3);
	let headGenre = row.insertCell(4);

	// insert the row values into the cells
	headName.innerHTML = '<h3>Name</h3>';
	headXbox.innerHTML = '<h3>Xbox One</h3>';
	headPS4.innerHTML = '<h3>PS4</h3>';
	headSwitch.innerHTML = '<h3>Switch</h3>';
	headGenre.innerHTML = '<h3>Genre</h3>';

	// traverse the consoles array adding row data
	for (let i = 0; i < games.length; i++) {
		// create a new row at the end of the table
		row = table.insertRow(-1);

		// create set of row cells and associated reference variables
		// for the 5 properties in the current row
		let name = row.insertCell(0);
		let xbox1 = row.insertCell(1);
		let pS4 = row.insertCell(2);
		let nSwitch = row.insertCell(3);
		let genre = row.insertCell(4);

		// insert the row values into the cells (Using the getters methods)
		name.innerHTML = games[i].name;
		xbox1.innerHTML = games[i].xbox;
		pS4.innerHTML = games[i].pS4;
		nSwitch.innerHTML = games[i].nintendoSwith;
		genre.innerHTML = games[i].genre;
	}
}