"use strict";
//tightness = 100%

let bot = require('./eventListeners.js');
let bot1 = {},
	bot2 = {};
let bot1Data = {},
	bot2Data = {};

function outputTemplate(botData) { //template for outputting to the DOM
	let template = `
		<h1>${botData.names}</h1>
		<h3>${botData.class} ${botData.type}</h3>
		<h4>Health Points: ${botData.health}</h4>
		<h4>Attack Points: ${botData.attack}</h4>
		<h4>Evade Chance: ${botData.evade}%</h4>`;
	return template;
}

function robot1Builder(botData) { //gets newly built bot and sends to dom using outputTemplate
	botData.names = $('#robot1Name').val();
	bot1Data = botData;
	$('.robot1Div').html(outputTemplate(botData));
	bot1.called = true;
	fightBtn(); //call to check if time to unhide fight btn
}

function robot2Builder(botData) { //gets newly built bot and sends to dom using outputTemplate
	botData.names = $('#robot2Name').val();
	bot2Data = botData;
	$('.robot2Div').html(outputTemplate(botData));
	bot2.called = true;
	fightBtn(); //call to check if time to unhide fight btn
}

function fightBtn() {
	if (bot1.called === true && bot2.called === true) { // check if both bots have been built
		$('.fightBtn').removeClass('hidden'); //unhide fight button
		return;
	}
}

function fight() {
	bot1Attack();
	bot2Attack();
}

function bot1Attack() { //attack function to check evade and apply damage accoringly
	let bot2Evade = evadeChecker(bot2Data.evade);
	if (bot2Evade) {
	} else {
		bot2Data.health = bot2Data.health - bot1Data.attack;
		if (bot2Data.health <= 0) {
			bot2Data.health = 0;
			$('.robot2Div').html(outputTemplate(bot2Data));
			alert(`${bot1Data.names} wins!`);
			location.reload();
		} else {
			$('.robot2Div').html(outputTemplate(bot2Data));
		}
		
	}
}

function bot2Attack() { //attack function to check evade and apply damage accoringly
	let bot1Evade = evadeChecker(bot1Data.evade);
	if (bot1Evade) {
	} else {
		bot1Data.health = bot1Data.health - bot2Data.attack;
		if (bot1Data.health <= 0) {
			bot1Data.health = 0;
			$('.robot1Div').html(outputTemplate(bot1Data));
			alert(`${bot2Data.names} wins!`);
			location.reload();
		} else {
			$('.robot1Div').html(outputTemplate(bot1Data));
		}	}
}


function evadeChecker(botEvade) { // Checks value of each bot's evade and returns true/false
	let evadeRoll = Math.floor(Math.random() * (100) + 1);
	if (evadeRoll < botEvade) {
		return true;
	} else {
		return false;
	}
}


module.exports = {robot1Builder, robot2Builder, fight};
