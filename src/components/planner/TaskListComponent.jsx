import { Component } from "react";
import TaskDataService from '../../api/planner/TaskDataService'
import AuthenticationService from './AuthenticationService.js'

class TaskListComponent extends Component{
    constructor(props){
        super(props);
        this.state = {
            tasks: 
            [
                // { id : 1, description: 'Learn React', done:false, targetDate: new Date()},
                // { id : 2, description: 'Apply for jobs', done:false, targetDate: new Date()},
                // { id : 3, description: 'Practice Hackerearth challenges', done:false, targetDate: new Date()}
            ]
        }
    }

    componentDidMount(){
        let username = AuthenticationService.getLoggedInUser
        TaskDataService.retriveAllTasks(username)
        .then(
            response=>{
                this.setState({tasks: response.data})
            })
    }

    
    render(){
        return(
            <div>
                <h1>List of tasks</h1>
                    <div className="container">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>Description</th>
                                    <th>Status</th>
                                    <th>Deadline</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.tasks.map(
                                        task => 
                                        <tr key={task.id}>
                                            <td>{task.description}</td>
                                            <td>{task.done.toString()}</td>
                                            <td>{task.targetDate.toString()}</td>
                                        </tr>
                                    )
                                }   
                            </tbody>
                        </table>
                    </div>
            </div>
        );
    }
}

export default TaskListComponent