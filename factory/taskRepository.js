var repo = function(){
var db = {/*db config here*/}

    var get = function(id){
            console.log("getting task " + id);
            return {name:"VERY IMPORTANT TASK"}
        };

    var save = function(task){
            console.log("Saving "+task.name+ " to DB")
        };
        

    console.log("Newing up task repo");
    return{
        get: get,
        save: save
    }
}

module.exports = repo;