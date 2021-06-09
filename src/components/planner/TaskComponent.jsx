import { Component } from "react";
import moment from "moment"
import { Formik,Form, Field } from "formik";

class TaskComponent extends Component{

    constructor(props){
        super(props)
        this.state = {
            id : this.props.match.params.id,
            descreption: 'learn forms',
            targetDate: moment(new Date()).format('MM-DD-YYYY')
        }
    }

    render(){
        return (
        <div>
            <h1>Task</h1>
            <div className="container">
                <Formik>
                    {
                        (props)=>(
                            <Form>
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