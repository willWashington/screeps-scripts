

module.exports = {
  run: function () {
    //purge memory of dead creeps
    for (var i in Memory.creeps) {
      if (!Game.creeps[i]) {
        console.log(`Deleted ${Game.creeps[i]} from memory.`)
        delete Memory.creeps[i];
      }
    }






  }
};