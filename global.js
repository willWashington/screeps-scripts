module.exports = {
  run: function () {



    //purge memory of dead creeps
    for (var i in Memory.creeps) {
      if (!Game.creeps[i]) {
        delete Memory.creeps[i];
      }
    }





  }
};