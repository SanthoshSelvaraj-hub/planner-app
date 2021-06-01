import { Component } from "react";
import './PlannerApp.css'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import AuthenticatedRoute from './AuthenticatedRoute.jsx'
import LoginComponent from './LoginComponent'
import LogoutComponent from './LogoutComponent'
import TaskListComponent from './TaskListComponent'
import WelcomeComponent from './WelcomeComponent'
import HeaderComponent from './HeaderComponent'
import FooterComponent from './FooterComponent'
import ErrorComponent from './ErrorComponent'

class PlannerApp extends Component{
    render(){
        return(
            <div className="plannerApp">
                
                <Router>
                    <HeaderComponent/>
                    <Switch>
                        <Route path="/" exact component={LoginComponent}/>
                        <Route path="/login" component={LoginComponent}/>
                        <Route path="/logout" component={LogoutComponent}/>
                        <AuthenticatedRoute path="/welcome/:name" component={WelcomeComponent}/>
                        <AuthenticatedRoute path="/tasks" component={TaskListComponent}/>
                        <Route component={ErrorComponent}></Route>  
                    </Switch>
                    <FooterComponent/>
                    {/* <LoginComponent/>
                    <WelcomeComponent/> */}
                </Router> 
                
            </div>
        );
    }
}


// function ShowInvalidCredentials(props){
//     if(props.hasLoginFailed){
//         return <div>Invalid Credentials</div>
//     }
//     return null
// }

// function ShowLoginSuccess(props){
//     if(props.showSuccessMessage){
//         return <div>Login Successful</div>
//     }
//     return null
// }

export default PlannerApp