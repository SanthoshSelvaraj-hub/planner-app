import { Component } from "react";
import { Route, Redirect } from "react-router";
import AuthenticationService from './AuthenticationService.js'

class FooterComponent extends Component{
    render(){
        return(
            <div>
                {/* <Navbar bg="light">
                    <Container>
                    <Navbar.Brand href="#home">Brand link</Navbar.Brand>
                    </Container>
                </Navbar> */}
                <footer className="footer">
                    <span className="text-muted">All Rights Reserved 2021</span>
                </footer>
            </div>
        )
    }
}

export default FooterComponent