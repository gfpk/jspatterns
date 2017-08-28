var myrepo = require('./repo');



var taskHandler = function(){
	return{
		save: function(){
			myrepo.save('Hi From taskHandler');
		}
	}
}

module.exports = taskHandler();