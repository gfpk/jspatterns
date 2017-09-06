(function(){
  var app = angular.module('taskManager', []);
  
  var taskController = function(Task, taskService, taskServiceFacade){
    
    var ctrl = this;

    ctrl.tasks = [new Task({
    	name: "MyTask",
		priority: 1,
		project: "Courses",
		user: "Jon",
		completed: false
    }),  new Task({
    	name: "MyOtherTask",
		priority: 1,
		project: "Courses",
		user: "Bobson",
		completed: false
    })];

    ctrl.completeTask = function(task) {
    	
    	taskServiceFacade.completeAndNotify(task);
    	console.log(task);
    }

    
  };
  
  app.controller('taskCtrl', taskController)
}());