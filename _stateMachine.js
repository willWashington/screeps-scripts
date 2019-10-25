var roleHarvester = require('role.harvester');
var roleUpgrader = require('role.upgrader');
var roleBuilder = require('role.builder');

module.exports = {
  run: function () {
    //foreach creep in the game
    for (let name in Game.creeps) {
      var creep = Game.creeps[name];
      //if the creep doesn't have a boolean working in memory, create it
      if (typeof creep.memory.working == "undefined") {
        creep.memory.working = false; //not working state
      }
      // roleHarvester.run(creep);
      if (creep.memory.role == 'harvester') {
        roleHarvester.run(creep);
      } else if (creep.memory.role == 'upgrader') {
        roleUpgrader.run(creep);
      } else if (creep.memory.role == 'builder') {
        roleBuilder.run(creep);
      }
    }


  }
};