var task= {};

task.title="My Task";
task.desc ="My Description";

Object.defineProperty(task, 'toString',{
	value:function(){
		return this.title + " | "+ this.desc
	},
	writable:false,
	enumerable:true,
	configurable:false
})

var urgentTask = Object.create(task);
//urgentTask.title = "My Urgent Task"

console.log(urgentTask.toString())
console.log(task.toString())


