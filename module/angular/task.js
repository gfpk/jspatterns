(function(){
	var app = angular.module("taskManager");

	app.factory("Task", function(TaskRepository){
		var Task = function(data){
			this.name = data.name;
			this.completed = data.completed;

		};

		Task.prototype.completeToggle = function(){				
			if(this.completed){
				//console.log( "uncompleting task: " + this.name)
				this.completed = false;
				this.save();
			}else{
				//console.log( "completing task: " + this.name)
				this.completed = true;
				this.save();
			}
			
		};

		Task.prototype.save = function(){
			//console.log("Saving task: " + this.name)
			TaskRepository.save(this);

		};


		Task.prototype.status =  function(){
			console.log( this.name+ " status is: " + this.completed )
		};

		return Task;
	})
	

}())