(function(){
  var app = angular.module('taskManager', []);
  
  var taskController = function(Task, UrgentTask, TaskRepository){
    
    var ctrl = this;
    ctrl.tasks = [];
    //ctrl.tasks = [new Task({name:"task 1"}), new Task({name:"task 2", completed:true})];


    ctrl.tasks.push(new Task(TaskRepository.get(1)));
    ctrl.tasks.push(new Task(TaskRepository.get(2)));
    ctrl.tasks.push(new UrgentTask(TaskRepository.get(3)));
    ctrl.tasks.push(new UrgentTask(TaskRepository.get(4)));
    ctrl.tasks.push(new Task(TaskRepository.get(5)));
    ctrl.tasks.push(new UrgentTask(TaskRepository.get(6,8)));

   
  };
  
  app.controller('taskCtrl', taskController)

}());