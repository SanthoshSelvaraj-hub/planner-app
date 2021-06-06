import { Component } from "react";
import AuthenticationService from './AuthenticationService.js'
import {Form, Button, Card} from 'react-bootstrap'

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
                <div className="container">
                    
                    <Card border="primary" style={{ width: '18rem'}}>
                        <Card.Header><h2>Login</h2></Card.Header>
                        <Card.Body>
                        <Form>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>Username</Form.Label>
                                <Form.Control type="email" placeholder="Username" name="username" value={this.state.username} onChange={this.handleChange} />
                            </Form.Group>
                            <Form.Group controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Password" name="password" value={this.state.password} onChange={this.handleChange}/>
                            </Form.Group>
                            {this.state.hasLoginFailed && <div className="alert alert-danger">Invalid Credentials</div>}
                            <Button variant="primary" onClick={this.loginClicked}>
                                login
                            </Button>
                            </Form>
                        </Card.Body>
                    </Card>            
                    
                
                
                    
                    {/* User name: <input type="text" ></input>{'  '}
                    Password: <input type="password" ></input>{'  '}
                    <Button className="btn btn-success" type="submit" >
                        login
                    </Button> */}
                    {/* <ShowInvalidCredentials hasLoginFailed={this.state.hasLoginFailed}/> */}
                    
                    {/* <ShowLoginSuccess showSuccessMessage={this.state.showSuccessMessage}/> */}
                    {this.state.showSuccessMessage && <div>Login Successful</div>}
                </div>
            </div>
        );
    }

    loginClicked(){
        if(this.state.username==='admin' && this.state.password==='admin') {
            AuthenticationService.registerSucessfulLogin(this.state.username, this.state.password);
            this.props.history.push(`/welcome/${this.state.username}`)
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

export default LoginComponent