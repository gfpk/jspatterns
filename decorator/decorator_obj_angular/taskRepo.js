(function(){
	var app = angular.module("taskManager");

	var taskRepo = function($http){
		var db = {/*db config here*/}
		 var called =0;

		var get = function(id, priority){
			called++;
				console.log("getting task " + id+" called " + called +" times");
				return {name:"TASK "+id,priority:priority}
			};

		var save = function(task){
				called++;
				console.log("Saving "+task.name+ " to DB (from repo service); called " + called + " times")
			};

		var status = function(name){
			
		}
			


		return{
			get: get,
			save: save
		}
	}

app.service("TaskRepository", taskRepo);
	

}())