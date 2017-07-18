'use strict'

class Task {
		constructor(name){
		this.name = name;
		this.completed = false;
	};

	complete(){		
		console.log( "completing task: " + this.name)
		this.completed = true;
	};

	save(){
		console.log("Saving task: " + this.name)
	};


	status() {
		console.log( this.name+ " status is: " + this.completed )
	};
}


module.exports = Task;