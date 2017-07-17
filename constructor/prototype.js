

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

var task1 = new Task("Task1");
var task2 = new Task("Task2");
var task3 = new Task("Task3");
var task4 = new Task("Task4");




task4.complete();
task2.save();
task3.save();
task4.save()