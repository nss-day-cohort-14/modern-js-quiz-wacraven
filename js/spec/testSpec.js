"use strict";
const test = require('tape');
const botBuilder = require('../botBuilder');
const app = require('../app');

test("Bot property checker:", function(t) {
	
	// t.equal(actual, expected, "should")
	let testQuadcopter = new botBuilder.Quadcopter();
	let testFixedWing = new botBuilder.FixedWing();
	let testWedge = new botBuilder.Wedge();
	let testHybrid = new botBuilder.Hybrid();
	let testBipedal = new botBuilder.Bipedal();
	let testCrab = new botBuilder.Crab();

	t.notEqual(testQuadcopter.names, undefined, "Quadcopter.names defined");
	t.equal(testQuadcopter.type, "Drone", "Quadcopter.type defined correctly");
	t.equal(testQuadcopter.class, "Quadcopter", "Quadcopter.class defined correctly");
	t.notEqual(testQuadcopter.health, undefined, "Quadcopter.health defined");
	t.notEqual(testQuadcopter.attack, undefined, "Quadcopter.attack defined");
	t.notEqual(testQuadcopter.evade, undefined, "Quadcopter.evade defined");


	t.end();
});