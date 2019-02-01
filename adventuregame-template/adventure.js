var body = document.getElementsByTagName('body')[0],
	title = document.getElementById('title'),
	description = document.getElementById('description'),
	buttons = document.getElementById('game-buttons'),
	button1 = document.getElementById('button1'),
	button2 = document.getElementById('button2'),
	button3 = document.getElementById('button3'),
	inventoryItem = document.getElementById('inventoryItem'),
	playerLocation,
	hasShowered,
	hasWeapon,
	beenToGasStation;

function reset() {
	var playerLocation = '',
		hasShowered = false,
		hasWeapon = false,
		beenToGasStation = false;

	inventoryItem.style.display = 'none';
}

// Startscreen
function scene0() {
	console.log('Survive the apocalypse');

	title.innerHTML = 'Survive the apocalypse';
	description.innerHTML = 'Your goal is to get to a safehouse, without having your brains eaten. <br> <br> Instructions: <br> Choose one of the options to progress. <br> Good luck and have fun.';
	button1.innerHTML = 'PLAY';

	button2.style.display = 'none';
	button3.style.display = 'none';

	body.style.backgroundImage = "url('img/scene0.jpg')";

	button1.onclick = function() {
		scene1();
	}
}

// Locations
function scene1() {
	console.log('Location: Your house');

	title.innerHTML = 'Location: Your house';
	description.innerHTML = 'You just woke up, and you see zombies walking down your street. <br> You plan on going outside <br> <br> What are you going to do?';
	button1.innerHTML = 'Take a shower';
	button2.innerHTML = 'Search the house';
	button3.innerHTML = 'Go outside';

	button2.style.display = 'inline-block';
	button3.style.display = 'inline-block';

	body.style.backgroundImage = "url('img/scene1.jpg')";

	button1.onclick = function() {
		alert('You feel refreshed');
		hasShowered = true;
		scene2();
	}

	button2.onclick = function() {
		alert('That took a bit too long, a zombie has entered your house!');
		battle();
	}

	button3.onclick = function() {
		alert('You leave the house');
		scene2();
	}
}

function scene2() {
	console.log('Location: Your street');

	title.innerHTML = 'Location: Your street';
	description.innerHTML = 'You figure it might be useful to find any survivors. <br> However you have to get to your car <br> <br> What are you going to do?';
	button1.innerHTML = 'Find survivors';
	button2.innerHTML = 'Go to the parking lot';

	button3.style.display = 'none';

	body.style.backgroundImage = "url('img/scene2.jpg')";

	button1.onclick = function() {
		alert('You decide to go look for survivors');
		hasWeapon = true;
		inventoryItem.src = 'img/shotgun.png';
		inventoryItem.style.display = 'block';
		scene3();
	}

	button2.onclick = function() {
		alert('You decide to go find your car');
		scene4();
	}
}

function scene3() {
	console.log('You found a survivor!');

	title.innerHTML = 'You found a survivor!';
	description.innerHTML = 'You find out the survivor is an arms dealer, he gives you a shotgun';
	button1.innerHTML = 'Go to the parking lot';

	button2.style.display = 'none';
	button3.style.display = 'none';

	body.style.backgroundImage = "url('img/scene3.jpg')";

	button1.onclick = function() {
		alert('You thank the survivor and take him to the parking lot');
		scene4();
	}
}

function scene4() {
	console.log('Location: Parking lot');

	title.innerHTML = 'Location: Parking lot';
	description.innerHTML = 'You arrive at the parking lot, however a small group of zombies are roaming around. <br> <br> What are you going to do?';
	button1.innerHTML = 'Try to sneak to your car';
	button2.innerHTML = 'Walk to your next destination';
	button3.innerHTML = 'Kill the zombies';

	button2.style.display = 'inline-block';
	button3.style.display = 'inline-block';

	body.style.backgroundImage = "url('img/scene4.jpg')";

	playerLocation = 'scene4';

	button1.onclick = function() {
		if (hasShowered == true) {
			alert('You enter your car');
			scene6();
		} else {
			alert('You try sneaking to your car, but a zombie attacks you from behind!');
			battle();
		}
	}

	button2.onclick = function() {
		alert('You decide to walk to your friends house, to find a car there');
		scene5();
	}

	button3.onclick = function() {
		if (hasWeapon == true) {
			alert('You kill the zombies and get in your car');
			scene6();
		} else {
			alert('You need a weapon to unlock this option');
		}
	}
}

function scene5() {
	console.log('Location: Friends house');

	title.innerHTML = 'Location: Friends house';
	description.innerHTML = 'You find your friends car, but you do not have any keys. <br> <br> What are you going to do?';
	button1.innerHTML = 'Search the house';
	button2.innerHTML = 'Search the garden';

	button3.style.display = 'none';

	body.style.backgroundImage = "url('img/scene5.jpg')";

	playerLocation = 'scene5';

	button1.onclick = function() {
		alert('The only thing you find in the house is a zombie...');
		battle();
	}

	button2.onclick = function() {
		alert('You find the car keys in the garden!');
		scene6();
	}
}

function scene6() {
	console.log('Location: Car');

	title.innerHTML = 'Location: Car';
	description.innerHTML = 'There is enough fuel to make it to the safehouse, but you might need a few supplies first. <br> <br> What are you going to do?';
	button1.innerHTML = 'Go to the gas station';
	button2.innerHTML = 'Go to the supermarket';
	button3.innerHTML = 'Go to the safehouse';

	button3.style.display = 'inline-block';

	body.style.backgroundImage = "url('img/scene6.jpg')";

	button1.onclick = function() {
		alert('You go to the gas station');
		beenToGasStation = true;
		scene7();
	}

	button2.onclick = function() {
		alert('You go to the supermarket');
		scene8();
	}

	button3.onclick = function() {
		alert('On your way to the safehouse the road has been blocked. You do not have enough fuel to make the detour. A horde of zombies surround your car.');
		fail();
	}
}

function scene7() {
	console.log('Location: Gas station');

	title.innerHTML = 'Location: Gas station';
	description.innerHTML = 'You fill up your tank. <br> <br> What are you going to do?';
	button1.innerHTML = 'Go to the supermarket';
	button2.innerHTML = 'Go to the safehouse';

	button3.style.display = 'none';

	body.style.backgroundImage = "url('img/scene7.jpg')";

	button1.onclick = function() {
		alert('You go to the supermarket');
		scene8();
	}

	button2.onclick = function() {
		alert('You make it to the safehouse');
		scene9();
	}
}

function scene8() {
	console.log('Location: Supermarket');

	title.innerHTML = 'Location: Supermarket';
	description.innerHTML = 'You get a supply of canned food. <br> <br> What are you going to do?';
	button1.innerHTML = 'Go to the safehouse';
	button2.innerHTML = 'Go to the gas station';

	button3.style.display = 'none';

	body.style.backgroundImage = "url('img/scene8.jpg')";

	if (beenToGasStation == true) {
		button2.style.display = 'none';
	}

	button1.onclick = function() {
		if (beenToGasStation == true) {
			alert('You make it to the safehouse');
			scene10();
		} else {
			alert('On your way to the safehouse the road has been blocked. You do not have enough fuel to make the detour. A horde of zombies surround your car.');
			fail();
		}
	}

	button2.onclick = function() {
		alert('You do not have enough fuel to make it to the gas station. A horde of zombies surround your car.');
		fail();
	}
}

function scene9() {
	console.log('Location: Safehouse');

	title.innerHTML = 'Location: Safehouse';
	description.innerHTML = 'You made it to the safehouse, but you do not have enough food to survive. <br> You die in a few months anyways.';
	button1.innerHTML = 'Oops...';

	button2.style.display = 'none';
	button3.style.display = 'none';

	body.style.backgroundImage = "url('img/scene9.jpg')";
	
	button1.onclick = function() {
		fail();
	}
}

function scene10() {
	console.log('Location: Safehouse');

	title.innerHTML = 'Location: Safehouse';
	description.innerHTML = 'You made it to the safehouse, with your supplies!';
	button1.innerHTML = 'Cool!';

	button2.style.display = 'none';
	button3.style.display = 'none';

	body.style.backgroundImage = "url('img/scene9.jpg')";
	
	button1.onclick = function() {
		win();
	}
}

// Battles
function battle() {
	console.log('A zombie has appeared!');

	title.innerHTML = 'A zombie has appeared!';
	description.innerHTML = 'What are you going to do?';
	button1.innerHTML = 'Fight';
	button2.innerHTML = 'Run';

	button3.style.display = 'none';

	body.style.backgroundImage = "url('img/battle.jpg')";

	button1.onclick = function() {
		if (hasWeapon == true) {
			if (playerLocation == 'scene4') {
				alert('You shot the zombie in the head, and enter your car');
				scene6();
			} else if (playerLocation == 'scene5') {
				alert('You shot the zombie in the head, went looking in the garden and found a car key');
				scene6();
			} else {
				alert('Something went wrong...');
				reset();
				scene0();
			}
		} else {
			alert('You did not have a weapon...');
			fail();
		}
	}

	button2.onclick = function() {
		alert('The zombie caught up to you, you died');
		fail();
	}
}

// Endings
function win() {
	reset();

	console.log('You win');

	title.innerHTML = 'You win';
	description.innerHTML = 'Well done, you survived the apocalypse!';
	button1.innerHTML = 'Play again';

	button1.style.display = 'none';
	button2.style.display = 'none';
	button3.style.display = 'none';

	body.style.backgroundImage = "url('img/scene9.jpg')";
}

function fail() {
	reset();

	console.log('You fail');

	title.innerHTML = 'You fail';
	description.innerHTML = 'Oops, you died!';
	
	button1.style.display = 'none';
	button2.style.display = 'none';
	button3.style.display = 'none';

	body.style.backgroundImage = "url('img/fail.jpg')";
}

// Run this
reset();
scene0();