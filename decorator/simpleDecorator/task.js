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

var myTask = new Task('Legacy Task');

var urgentTask = new Task("Urgent Task");

urgentTask.priority = 2;

urgentTask.notify = function(){
	console.log("notifying important people about "+ this.name)
}


urgentTask.complete();
urgentTask.save = function(){
	this.notify();
	Task.prototype.save.call(this)
};
urgentTask.save();