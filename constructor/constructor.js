

var Task = function(name){
	this.name = name;
	this.completed = false;

	this.complete= function(){
		this.completed = true;
	}

	this.save = function(){
		console.log("Saving task: " + this.name)
	}

	this.status =  function(){
		console.log( this.name+ " status is: " + this.completed )
	}

}

var task1 = new task("bambba");



task1.status();
task1.complete();
task1.status();
