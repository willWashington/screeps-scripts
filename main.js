var global = require('global');
var spawner = require('spawner');
var _stateMachine = require('_stateMachine');
var timer = require('timer');

module.exports.loop = function () {
	global.run();
	spawner.run();
	_stateMachine.run();
	timer.run();





};

//Game.creeps.Violet.memory.working = false;
//Game.spawns.Spawn1.createCreep([WORK,CARRY,MOVE,MOVE]);