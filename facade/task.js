var Task = function(data) {
	this.name = data.name;
	this.priority = data.priority;
	this.project = data.project;
	this.user = data.user;
	this.completed = data.completed;
}

var TaskService = function() {
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
}();
//Important here--
var TaskServiceWrapper = function() {
	var completeAndNotify = function(task){
		TaskService.complete(myTask);

		if(myTask.completed){
			TaskService.setCompletedDate(task);
			TaskService.notifyCompletion(task);
			TaskService.save(task);
		}
	}
	return{
		completeAndNotify:completeAndNotify
	}
}();
//---

var myTask = new Task({
	name:"My Task",
	priority:1,
	project:"SomeProj",
	user:"SomeUser",
	completed:false
});

TaskServiceWrapper.completeAndNotify(myTask);
