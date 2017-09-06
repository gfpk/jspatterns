(function() {
	var app = angular.module("taskManager");
	var taskServiceFacade = function(taskService){

		var completeAndNotify = function(task){
			taskService.complete(task);
	    	if(task.completed){
	    		taskService.setCompletedDate(task);
	    		taskService.notifyCopmletion(task);
				taskService.save(task);
	    	}
	    	
		}
		return {
			completeAndNotify:completeAndNotify
		}
	};

	app.service('taskServiceFacade', taskServiceFacade);
}())