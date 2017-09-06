(function(){
	var taskService = function(){
		return{
			complete:function(task){
				task.completed = true;
				console.log("completing task: "+ task.name);
			},
			setCompletedDate:function(task){
				task.completedDate = new Date();
				console.log(task.name+" completed on "+ task.completedDate);
			},
			notifyCopmletion:function(task, user){
				
				console.log("notifying "+task.user+" of the completion of task: " +task.name);
			},
			save:function(task) {
				console.log("Saving task: "+task.name);
				
			}		
		}
	}

var app = angular.module("taskManager");
app.service("taskService", taskService);
	

}())