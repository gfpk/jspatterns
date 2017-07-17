

var Task = function(name){
	this.name = name;
	this.completed = false;

}


Task.prototype.complete = function(){
		
		console.log( "completing task: " + this.name)
		this.completed = true;
	}

Task.prototype.save = function(){
		console.log("Saving task: " + this.name)
	}


Task.prototype.status =  function(){
		console.log( this.name+ " status is: " + this.completed )
	}


module.exports = Task;