(function(){
  var app = angular.module('taskManager', []);
  
  var taskController = function(Task, TaskRepository){
    
    var ctrl = this;
    ctrl.tasks = [];
    //ctrl.tasks = [new Task({name:"task 1"}), new Task({name:"task 2", completed:true})];


    ctrl.tasks.push(new Task(TaskRepository.get(1)));
    ctrl.tasks.push(new Task(TaskRepository.get(2)));
  };
  
  app.controller('taskCtrl', taskController)
}());