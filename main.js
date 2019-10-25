module.exports.loop = function () {
  console.log('test');
  Game.spawns['Spawn1'].spawnCreep( [WORK, CARRY, MOVE], 'Harvester1');
  const creep = Game.creeps['Harvester1'];
  const sources = creep.room.find(FIND_SOURCES);
  const totalSources = sources.length;

  if (creep.harvest(sources[0]) == ERR_NOT_IN_RANGE) {
    creep.moveTo(sources[0], {visualizePathStyle: {stroke: "#bc13fe"}})
  }
}();