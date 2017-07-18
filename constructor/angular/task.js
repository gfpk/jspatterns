(function(){
	var app = angular.module("taskManager");

	app.factory("Task", function(){
		var Task = function(data){
			this.name = data.name;
			this.completed = data.completed;

		};

		Task.prototype.completeToggle = function(){				
			if(this.completed){
				console.log( "uncompleting task: " + this.name)
				this.completed = false;
			}else{
				console.log( "completing task: " + this.name)
				this.completed = true;
			}
			
		};

		Task.prototype.save = function(){
			console.log("Saving task: " + this.name)
		};


		Task.prototype.status =  function(){
			console.log( this.name+ " status is: " + this.completed )
		};

		return Task;
	})
	

}())