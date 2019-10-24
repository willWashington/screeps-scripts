module.exports = {
  run: function () {
    var maxScreeps = 18;
    var minNumHarvester = 4;
      //low dash function _.sum
    var numOfHarvesters = _.sum(Game.creeps, (c)=> c.memory.role == 'harvester');
    var numOfUpgraders = _.sum(Game.creeps, (c)=> c.memory.role == 'upgrader');
    console.log('['+numOfHarvesters+']' + "h");
    console.log('['+numOfUpgraders+']' + "u");
    console.log("["+Object.keys(Memory.creeps).length+']' + "T");

    if (numOfHarvesters < minNumHarvester && numOfHarvesters <= maxScreeps) {
      Game.spawns.Spawn1.createCreep([WORK, CARRY, CARRY, CARRY, MOVE], undefined, {
        role: 'harvester',
        working: false
      });
    } else {
      if((numOfHarvesters + numOfUpgraders) <= maxScreeps)
      Game.spawns.Spawn1.createCreep([WORK, CARRY, CARRY, CARRY, MOVE], undefined, {
        role: 'upgrader',
        working: false
      });
    }

    //if there are less than 12 workers, spawn workers
    if (Object.keys(Memory.creeps).length <= 6) {

    }

  }
};