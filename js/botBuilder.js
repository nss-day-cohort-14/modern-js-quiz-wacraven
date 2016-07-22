"use strict";
//tightness = 100%

// const eventListeners = require('./eventListeners');
// const Quiz = require('./quiz');

function Robot() {
	this.names = null;
	this.type = null;
	this.class = null;
	this.health = 0;
	this.attack = 0;
	this.evade = 0;
}

//Define drone and sub classes
function Drone() {
	this.type = "Drone";
	this.health = Math.floor(Math.random() * (50 - 30) + 30);
	this.attack = Math.floor(Math.random() * (30 - 20) + 20);
	this.evade = Math.floor(Math.random() * (55 - 45) + 40);
}
Drone.prototype = new Robot();

function Quadcopter() {
	this.class = "Quadcopter";
	this.health += -5;
	this.attack += -5;
	this.evade += 10;
}
Quadcopter.prototype = new Drone();

function FixedWing() {
	this.class = "Fixed Wing";
	this.health += 0;
	this.attack += 10;
	this.evade += -10;
}
FixedWing.prototype = new Drone();

//Define tank and sub classes
function Tank() {
	this.type = "Tank";
	this.health = Math.floor(Math.random() * (100 - 80) + 80);
	this.attack = Math.floor(Math.random() * (30 - 20) + 20);
	this.evade = Math.floor(Math.random() * (10 - 0) + 0);
}
Tank.prototype = new Robot();

function Wedge() {
	this.class = "Wedge";
	this.health += 5;
	this.attack += -5;
	this.evade += 0;
}
Wedge.prototype = new Tank();

function Hybrid() {
	this.class = "Hybrid";
	this.health += -5;
	this.attack += 5;
	this.evade += 0;
}
Hybrid.prototype = new Tank();

//Define walker and sub classes
function Walker() {
	this.type = "Walker";
	this.health = Math.floor(Math.random() * (80 - 60) + 60);
	this.attack = Math.floor(Math.random() * (30 - 20) + 20);
	this.evade = Math.floor(Math.random() * (25 - 15) + 15);
}
Walker.prototype = new Robot();

function Bipedal() {
	this.class = "Bipedal";
	this.health += -10;
	this.attack += 5;
	this.evade += 5;
}
Bipedal.prototype = new Walker();

function Crab() {
	this.class = "Crab";
	this.health += 5;
	this.attack += 10;
	this.evade += -5;
}
Crab.prototype = new Walker();



module.exports = {Quadcopter, FixedWing, Wedge, Hybrid, Bipedal, Crab, Robot};



