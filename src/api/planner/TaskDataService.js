import axios from "axios"

class TaskDataService{
    retriveAllTasks(name){
        // console.log("HelloWorldService executed..")
        return axios.get(`http://localhost:8080/users/${name}/tasks`);
    }

    deleteTask(name, id){
        return axios.delete(`http://localhost:8080/users/${name}/tasks/${id}`);
    }

}

export default new TaskDataService()