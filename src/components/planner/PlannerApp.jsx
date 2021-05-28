import { Component } from "react";
import {Form, Button, Navbar} from 'react-bootstrap'
import './PlannerApp.css'
import {BrowserRouter as Router, Route} from 'react-router-dom'

class PlannerApp extends Component{
    render(){
        return(
            <div className="plannerApp">
                <Router>
                    <div>
                        <Route path="/" exact Component={LoginComponent}/>
                        <Route path="/login" Component={LoginComponent}/>
                        <Route path="/welcome" Component={WelcomeComponent}/>
                    </div>
                </Router> 
            </div>
        );
    }
}

class WelcomeComponent extends Component{
    render(){
        return(
            <div>
                Welcome Santhosh!!
            </div>
        );
    }
}

class LoginComponent extends Component{

    constructor(props){
        super(props)
        this.state = {
            username: 'admin',
            password: '',
            hasLoginFailed: false,
            showSuccessMessage: false
        }
        this.handleChange = this.handleChange.bind(this)
        this.loginClicked = this.loginClicked.bind(this)
    }

    render(){
        return(
            <div className="loginComponent">
                {/* <Navbar bg="dark" variant="dark">
                    <Navbar.Brand href="#home">
                        Planner Login
                    </Navbar.Brand>
                </Navbar>
                <Form>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    login
                </Button>
                </Form> */}
                User name: <input type="text" name="username" value={this.state.username} onChange={this.handleChange}></input>{'  '}
                Password: <input type="password" name="password" value={this.state.password} onChange={this.handleChange}></input>{'  '}
                <Button variant="primary" type="submit" onClick={this.loginClicked}>
                    login
                </Button>
                {/* <ShowInvalidCredentials hasLoginFailed={this.state.hasLoginFailed}/> */}
                {this.state.hasLoginFailed && <div>Invalid Credentials</div>}
                {/* <ShowLoginSuccess showSuccessMessage={this.state.showSuccessMessage}/> */}
                {this.state.showSuccessMessage && <div>Login Successful</div>}
                
            </div>
        );
    }

    loginClicked(){
            if(this.state.username==='admin' && this.state.password==='admin') {
                this.setState({
                    showSuccessMessage: true,
                    hasLoginFailed: false
                })
            } 
            else
                this.setState({
                    showSuccessMessage: false,
                    hasLoginFailed: true
                })
            // console.log(this.state)
    }

    handleChange(event){
        return(
            this.setState({[event.target.name]: event.target.value})
        );
    }

    // handleUserNameChange(event){
    //     return(
    //         this.setState({username: event.target.value})
    //     );
    // }

    // handlePasswordChange(event){
    //     return(
    //         this.setState({password: event.target.value})
    //     );
    // }

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