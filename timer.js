module.exports = {
  run: function () {

    //50 is 10 seconds
    if (Game.time % 300 === 0) {
      let numOfHarvesters = _.sum(Game.creeps, (c) => c.memory.role == 'harvester');
      let numOfUpgraders = _.sum(Game.creeps, (c) => c.memory.role == 'upgrader');
      let numOfBuilders = _.sum(Game.creeps, (c) => c.memory.role == 'builder');
      console.log('[' + numOfHarvesters + ']' + " harvesters");
      console.log('[' + numOfUpgraders + ']' + " upgraders");
      console.log('[' + numOfBuilders + ']' + " builders");
      console.log("[" + Object.keys(Memory.creeps).length + ']' + " TOTAL CREEPS");

    }
  }
};