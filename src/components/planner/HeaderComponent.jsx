import { Component } from "react";
import AuthenticationService from './AuthenticationService.js'
import { Navbar, Nav, Container} from 'react-bootstrap'
import {withRouter} from 'react-router'

class HeaderComponent extends Component{
    render(){
        {
        const isUserLoggedIn = AuthenticationService.isUserLoggedIn();
        //console.log(isUserLoggedIn);
        return(
            
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                <Navbar.Brand href="/">Planner App</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                    {isUserLoggedIn && <Nav.Link href="/welcome/admin">Home</Nav.Link>}
                    {isUserLoggedIn && <Nav.Link href="/tasks">Tasks</Nav.Link>}
                    </Nav>
                    <Nav className=" navbar-collapse justify-content-end">
                    {!isUserLoggedIn && <Nav.Link href="/login">Login</Nav.Link>}
                    {isUserLoggedIn && <Nav.Link href="/logout" onClick={AuthenticationService.logout}>Logout</Nav.Link>}
                    </Nav>
                </Navbar.Collapse>
                </Container>
            </Navbar>
        )
        }
    }
}   

export default withRouter(HeaderComponent)