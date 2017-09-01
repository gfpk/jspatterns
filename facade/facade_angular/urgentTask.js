(function(){
	var app = angular.module("taskManager");

	app.factory("UrgentTask", function(Task,TaskRepository){
		var UrgentTask = function(data){
			Task.call(this,data);
			this.priority = data.priority ? data.priority:100;


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
		return UrgentTask;
	});	
}())