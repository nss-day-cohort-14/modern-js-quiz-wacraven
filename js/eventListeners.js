"use strict";

const NewRobot = require('./botBuilder');
const app = require('./app');

let robot1Class = null;
let robot2Class = null;

$('#robot1Name').on('keyup', (key) => {
	$('.typeBtn1').removeClass('hidden');
});

$('#robot2Name').on('keyup', (key) => { 
	$('.typeBtn2').removeClass('hidden');
});

$('.typeBtn1').on('click', function(event) {
	let currentBtn = $(this).prop('value');
	$('.classBtn1').addClass('hidden');
	$(`.${currentBtn}Class1`).removeClass('hidden');
});

$('.typeBtn2').on('click', function(event) {
	let currentBtn = $(this).prop('value');
	$('.classBtn2').addClass('hidden');
	$(`.${currentBtn}Class2`).removeClass('hidden');
});

$('.classBtn1').on('click', function(event) {
	let currentBtn = $(this).prop('value');
	let fightBtn = $('.fightBtn');
	if (currentBtn === 'Quadcopter') {
		robot1Class = new NewRobot.Quadcopter();
		app.robot1Builder(robot1Class);
	} else if (currentBtn === 'FixedWing') {
		robot1Class = new NewRobot.FixedWing();
		app.robot1Builder(robot1Class);
	} else if (currentBtn === 'Wedge') {
		robot1Class = new NewRobot.Wedge();
		app.robot1Builder(robot1Class);
	} else if (currentBtn === 'Hybrid') {
		robot1Class = new NewRobot.Hybrid();
		app.robot1Builder(robot1Class);
	} else if (currentBtn === 'Bipedal') {
		robot1Class = new NewRobot.Bipedal();
		app.robot1Builder(robot1Class);
	} else {
		robot1Class = new NewRobot.Crab();
		app.robot1Builder(robot1Class);
	}
});

$('.classBtn2').on('click', function(event) {
	let currentBtn = $(this).prop('value');
	let fightBtn = $('.fightBtn');
	if (currentBtn === 'Quadcopter') {
		robot2Class = new NewRobot.Quadcopter();
		app.robot2Builder(robot2Class);
	} else if (currentBtn === 'FixedWing') {
		robot2Class = new NewRobot.FixedWing();
		app.robot2Builder(robot2Class);
	} else if (currentBtn === 'Wedge') {
		robot2Class = new NewRobot.Wedge();
		app.robot2Builder(robot2Class);
	} else if (currentBtn === 'Hybrid') {
		robot2Class = new NewRobot.Hybrid();
		app.robot2Builder(robot2Class);
	} else if (currentBtn === 'Bipedal') {
		robot2Class = new NewRobot.Bipedal();
		app.robot2Builder(robot2Class);
	} else {
		robot2Class = new NewRobot.Crab();
		app.robot2Builder(robot2Class);
	}
});

$('.fightBtn').on('click', function(event) {
	app.fight();
});

module.exports = {robot1Class, robot2Class};