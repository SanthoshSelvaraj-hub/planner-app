import { Component } from "react";
import { Route, Redirect } from "react-router";
import AuthenticationService from './AuthenticationService.js'

class LogoutComponent extends Component{
    render(){
        return(
            <div>
                You have been sucessfully logged out.
                <div className="container">
                    Thank you for using our application.
                </div>
            </div>
        )
    }
}


export default LogoutComponent