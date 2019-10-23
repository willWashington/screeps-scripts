module.exports = {

  spawn(){
    const creepList = [];
    for (var creep in Game.creeps) {
      creepList.add(creep);
    }
    if (creepList.length < 5) {
      let id = ()=> {}
      Game.spawns['Spawn1'].spawnCreep( [WORK, CARRY, MOVE], `Harvester${id}`);
    }
  }
}
