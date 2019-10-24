var global = require('global');
var spawner = require('spawner');
var roleHarvester = require('role.harvester');
var roleUpgrader = require('role.upgrader');
var _stateMachine = require('_stateMachine');

module.exports.loop = function () {
	global.run();
	spawner.run();
	_stateMachine.run();





}



//Game.creeps.Violet.memory.working = false;

//Game.spawns.Spawn1.createCreep([WORK,CARRY,MOVE,MOVE]);