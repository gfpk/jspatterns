(function(){
	var app = angular.module("taskManager");

	var taskService = function($http){	
		return{
			complete : function(task) {
			task.completed = true;
				console.log("Completing task: " + task.name);
			},
			setCompletedDate : function(task) {
				task.completedDate = new Date();
				console.log(task.name + " completed on " + task.completedDate);
			},
			notifyCompletion : function (task, user) {
				console.log("Notifying "+ user + " of the completion of "+ task.name)
				
			},
			save : function(task){
				console.log("Saving task: " + task.name);
			}
		}
	};
	
app.service("taskService", taskService);

}())