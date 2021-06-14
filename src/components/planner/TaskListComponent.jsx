import { Component } from "react";
import TaskDataService from '../../api/planner/TaskDataService'
import AuthenticationService from './AuthenticationService.js'
import moment from 'moment'

class TaskListComponent extends Component{
    constructor(props){
        super(props);
        this.state = {
            message: null,
            tasks: 
            [
                // { id : 1, description: 'Learn React', done:false, targetDate: new Date()},
                // { id : 2, description: 'Apply for jobs', done:false, targetDate: new Date()},
                // { id : 3, description: 'Practice Hackerearth challenges', done:false, targetDate: new Date()}
            ]
        }

        this.deleteTaskClicked = this.deleteTaskClicked.bind(this)
        this.refreshTasks = this.refreshTasks.bind(this)
        this.editTaskClicked = this.editTaskClicked.bind(this)
        this.addTaskClicked = this.addTaskClicked.bind(this)
    }

    componentDidMount(){
        this.refreshTasks()
    }

    refreshTasks(){
        let username = AuthenticationService.getLoggedInUser
        TaskDataService.retriveAllTasks(username)
        .then(
            response=>{
                this.setState({tasks: response.data})
            })
    }

    deleteTaskClicked(id){
        let username = AuthenticationService.getLoggedInUser()
        // console.log(id + " " + username)
        TaskDataService.deleteTask(username, id)
        .then(
            response=>{
                this.setState({message: `Delete of ${id} successful`});
                this.refreshTasks()
            })

    }

    editTaskClicked(id){
        console.log( "Edit " + id)
        this.props.history.push(`/tasks/${id}`)
        // let username = AuthenticationService.getLoggedInUser()
        // // console.log(id + " " + username)
        // TaskDataService.deleteTask(username, id)
        // .then(
        //     response=>{
        //         this.setState({message: `Delete of ${id} successful`});
        //         this.refreshTasks()
        //     })

    }

    addTaskClicked(){
        
        this.props.history.push(`/tasks/-1`)

    }

    
    render(){
        return(
            <div>
                <h1>List of tasks</h1>
                {this.state.message && <div className="alert alert-success">{this.state.message}</div>}
                    <div className="container">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>Description</th>
                                    <th>Status</th>
                                    <th>Deadline</th>
                                    <th>Edit</th>
                                    <th>Delete</th>
                                    
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.tasks.map(
                                        task => 
                                        <tr key={task.id}>
                                            <td>{task.description}</td>
                                            <td>{task.done.toString()}</td>
                                            <td>{moment(task.targetDate).format('YYYY-MM-DD')}</td>
                                            <td><button className="btn btn-success" onClick={()=>this.editTaskClicked(task.id)}>Edit</button></td>
                                            <td><button className="btn btn-danger" onClick={()=>this.deleteTaskClicked(task.id)}>Delete</button></td>
                                        </tr>
                                    )
                                }   
                            </tbody>
                        </table>
                        <div className='row'>
                                <button className="btn btn-success" onClick={this.addTaskClicked}>Add</button>
                        </div>
                    </div>
            </div>
        );
    }
}

export default TaskListComponent