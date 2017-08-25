(function(){
	var app = angular.module("taskManager");

	var taskRepo = function($http){
		var db = {/*db config here*/}

		var get = function(id){
				console.log("getting task " + id);
				return {name:"VERY IMPORTANT TASK"}
			};

		var save = function(task){
				console.log("Saving "+task.name+ " to DB (from repo service)")
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