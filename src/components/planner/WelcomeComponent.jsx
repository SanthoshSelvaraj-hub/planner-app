import { Component } from "react";
import { Route, Redirect } from "react-router";
import AuthenticationService from './AuthenticationService.js'
import {BrowserRouter as Router,  Switch, Link, withRouter} from 'react-router-dom'

class WelcomeComponent extends Component{
    render(){
        return(
            <div>
                <h1>Welcome {this.props.match.params.name}!!</h1>
                <div>
                    You can manage your tasks <Link to="/tasks">here</Link>.
                </div>
                
            </div>
        );
    }
}


export default WelcomeComponent