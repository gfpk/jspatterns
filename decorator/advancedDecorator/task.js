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

var myTask = new Task("Legacy Task");
myTask.complete();
myTask.save();

var UrgentTask = function(name, priority){
	Task.call(this,name);
	this.priority = priority;

};
UrgentTask.prototype = Object.create(Task.prototype);
UrgentTask.prototype.save = function(){
	console.log("SAVING START----")
	this.notify();
	Task.prototype.save.call(this);
	console.log("SAVING END----")
}
UrgentTask.prototype.notify = function(){
	console.log("Notyfying about "+ this.name+" PRIORITY: "+ this.priority+" COMPLETED: "+ this.completed)
};


var ut = new UrgentTask("UrgTask", 200);
//ut.complete();
ut.save();
