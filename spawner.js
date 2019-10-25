module.exports = {
  run: function () {
    var maxScreeps = 24;
    var minNumHarvester = 6;
    var minNumUpgraders = 10;
    var minNumBuilder = 4;

    //low dash function _.sum
    var numOfHarvesters = _.sum(Game.creeps, (c) => c.memory.role == 'harvester');
    var numOfUpgraders = _.sum(Game.creeps, (c) => c.memory.role == 'upgrader');
    var numOfBuilders = _.sum(Game.creeps, (c) => c.memory.role == 'builder');
    var totalScreeps = numOfBuilders + numOfHarvesters + numOfUpgraders;
    var constructionCounter = Object.keys(Game.constructionSites).length;

    if (totalScreeps <= maxScreeps) {
      if (numOfHarvesters < minNumHarvester) {
        Game.spawns.Spawn1.createCreep([WORK, CARRY, CARRY, MOVE], undefined, {
          role: 'harvester',
          working: false
        });
      } else if (numOfBuilders < minNumBuilder && constructionCounter > 0) {
        Game.spawns.Spawn1.createCreep([WORK, WORK, CARRY, MOVE], undefined, {
          role: 'builder',
          working: false
        });
      } else if (numOfUpgraders < minNumUpgraders) {
        Game.spawns.Spawn1.createCreep([WORK, WORK, CARRY, MOVE], undefined, {
          role: 'upgrader',
          working: false
        });
      } else {
        Game.spawns.Spawn1.createCreep([WORK, WORK, CARRY, MOVE], undefined, {
          role: 'builder',
          working: false
        });
      }
    }
  }
};