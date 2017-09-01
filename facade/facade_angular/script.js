(function(){
  var app = angular.module('taskManager', []);
  
  var taskController = function(Task, TaskService){
    
    var ctrl = this;
  
    //ctrl.tasks = [new Task({name:"task 1"}), new Task({name:"task 2", completed:true})];

    ctrl.tasks = [new Task({
      name : "MyTask",
      priority : 1,
      project : "Courses",
      user : "Jon",
      completed : false
    })];
   
    ctrl.completeTask = function(i){
      var myTask = ctrl.tasks[i];
      taskService.complete(myTask);
      if(myTask.completed==true){
        taskService.setCompletedDate(task);
        taskService.notifyCompletion(task);
        taskService.save(task);
      }
    }

   
  };
  
  app.controller('taskCtrl', taskController)

}());