var Task = require("./task");
var Repo = require("./taskRepository");

var task1 = new Task(Repo.get(1));
var task2 = new Task("Task2");
var task3 = new Task("Task3");
var task4 = new Task("Task4");




task1.save();
