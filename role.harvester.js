module.exports = {
  run: function(creep) {

		//STATE:
			//boolean working
				//: in creep memory

		//STATE: the creep is working and is empty
		if (creep.memory.working == true && creep.carry.energy == 0) {
			creep.memory.working = false; //not working state
			//if the creep isn't working and is full
		} else if (creep.memory.working == false && creep.carry.energy == creep.carryCapacity) {
			creep.memory.working = true; //working state
		}

		//STATE: the creep is not working and is full
		if (creep.memory.working == true) { //if working
			if (creep.transfer(Game.spawns.Spawn1, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
					//^ if you try to transfer and can't because of range to spawn
				creep.moveTo(Game.spawns.Spawn1); //go to spawn and transfer
			}
		} else {
			var source = creep.pos.findClosestByPath(FIND_SOURCES); //find closest node
			if (creep.harvest(source) == ERR_NOT_IN_RANGE) { //if that node isn't close enough to harvest
				creep.moveTo(source); //move to it
			}
		}
  }
};