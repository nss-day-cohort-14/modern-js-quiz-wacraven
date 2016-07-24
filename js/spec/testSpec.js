"use strict";
const test = require('tape');
const botBuilder = require('../botBuilder');

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


	t.notEqual(testFixedWing.names, undefined, "FixedWing.names defined");
	t.equal(testFixedWing.type, "Drone", "FixedWing.type defined correctly");
	t.equal(testFixedWing.class, "Fixed Wing", "FixedWing.class defined correctly");
	t.notEqual(testFixedWing.health, undefined, "FixedWing.health defined");
	t.notEqual(testFixedWing.attack, undefined, "FixedWing.attack defined");
	t.notEqual(testFixedWing.evade, undefined, "FixedWing.evade defined");


	t.notEqual(testWedge.names, undefined, "Wedge.names defined");
	t.equal(testWedge.type, "Tank", "Wedge.type defined correctly");
	t.equal(testWedge.class, "Wedge", "Wedge.class defined correctly");
	t.notEqual(testWedge.health, undefined, "Wedge.health defined");
	t.notEqual(testWedge.attack, undefined, "Wedge.attack defined");
	t.notEqual(testWedge.evade, undefined, "Wedge.evade defined");


	t.notEqual(testHybrid.names, undefined, "Hybrid.names defined");
	t.equal(testHybrid.type, "Tank", "Hybrid.type defined correctly");
	t.equal(testHybrid.class, "Hybrid", "Hybrid.class defined correctly");
	t.notEqual(testHybrid.health, undefined, "Hybrid.health defined");
	t.notEqual(testHybrid.attack, undefined, "Hybrid.attack defined");
	t.notEqual(testHybrid.evade, undefined, "Hybrid.evade defined");


	t.notEqual(testBipedal.names, undefined, "Bipedal.names defined");
	t.equal(testBipedal.type, "Walker", "Bipedal.type defined correctly");
	t.equal(testBipedal.class, "Bipedal", "Bipedal.class defined correctly");
	t.notEqual(testBipedal.health, undefined, "Bipedal.health defined");
	t.notEqual(testBipedal.attack, undefined, "Bipedal.attack defined");
	t.notEqual(testBipedal.evade, undefined, "Bipedal.evade defined");


	t.notEqual(testCrab.names, undefined, "Crab.names defined");
	t.equal(testCrab.type, "Walker", "Crab.type defined correctly");
	t.equal(testCrab.class, "Crab", "Crab.class defined correctly");
	t.notEqual(testCrab.health, undefined, "Crab.health defined");
	t.notEqual(testCrab.attack, undefined, "Crab.attack defined");
	t.notEqual(testCrab.evade, undefined, "Crab.evade defined");


	t.end();
});