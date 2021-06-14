import { Component } from "react";
import moment from "moment"
import { Formik,Form, Field, ErrorMessage } from "formik";
import TaskDataService from "../../api/planner/TaskDataService.js"
import AuthenticationService from './AuthenticationService.js'

class TaskComponent extends Component{

    constructor(props){
        super(props)
        this.state = {
            id : this.props.match.params.id,
            description: '',
            targetDate: moment(new Date()).format('YYYY-MM-DD')
        }

        this.onSubmit = this.onSubmit.bind(this)
        this.validate = this.validate.bind(this)
    }

    componentDidMount(){
        if(this.state.id===-1){
            return
        }

        let username = AuthenticationService.getLoggedInUser()
        TaskDataService.retriveTask(username, this.state.id)
        .then(response => this.setState({
            description: response.data.description,
            targetDate: moment(response.data.targetDate).format('YYYY-MM-DD')
        }))
    }

    validate(values){
        let errors = {}
        if(!values.description){
            errors.description = 'Enter a description'
        } else if(values.description.length<5){
            errors.description = 'Enter atleast 5 characters in description'
        }
        
        if(!moment(values.targetDate).isValid()){
            errors.targetDate = 'Enter a valid target date'
        }
        return errors
    }    

    onSubmit(values){

        let task = {
            id: this.state.id,
            description: values.description,
            targetDate: values.targetDate
            }
            
        if(this.state.id===-1){
            let username = AuthenticationService.getLoggedInUser()
            TaskDataService.createTask(username, task).then(()=>this.props.history.push(`/tasks`))
        }
        else{
            let username = AuthenticationService.getLoggedInUser()
            TaskDataService.updateTask(username, this.state.id, task).then(()=>this.props.history.push(`/tasks`))
        }
        
    }

    render(){
        let {description, targetDate} = this.state
        return (
        <div>
            <h1>Task</h1>
            <div className="container">
                <Formik 
                initialValues = {{ description, targetDate }}
                onSubmit={this.onSubmit}
                validateOnBlur={false}
                validateOnChange={false}
                validate={this.validate}
                enableReinitialize = {true}
                >
                    {
                        (props)=>(
                            <Form>
                                <ErrorMessage name="description" component="div" className="alert alert-warning"/>
                                <ErrorMessage name="targetDate" component="div" className="alert alert-warning"/>
                                <fieldset className="form-group">
                                    <label>Description</label>
                                    <Field className="form-control" type="text" name="description"/>
                                </fieldset>
                                <fieldset className="form-group">
                                    <label></label>
                                    <Field className="form-control" type="date" name="targetDate"/>
                                </fieldset>
                                <button className="btn btn-success" type="submit">Submit</button>
                            </Form>
                        )
                    }
                </Formik>
            </div>
        </div>
        )
    }
}

export default TaskComponent 