/*var task= {};

task.title="My Task";
task.desc ="My Description";

Object.defineProperty(task, 'toString',{
	value:function(){
		return this.title + " | "+ this.desc
	},
	writable:false,
	enumerable:true,
	configurable:false
})

var urgentTask = Object.create(task);
//urgentTask.title = "My Urgent Task"

console.log(urgentTask.toString())
console.log(task.toString())*/

var Repo = require("./taskRepository");

var Task = function(data){
	this.name = data.name;
	this.completed = data.completed;
}


Task.prototype.complete = function(){		
		console.log( "completing task: " + this.name)
		this.completed = true;
	}

Task.prototype.save = function(){
		Repo.save(this);
	}


Task.prototype.status =  function(){
		console.log( this.name+ " status is: " + this.completed )
	}

module.exports = Task;