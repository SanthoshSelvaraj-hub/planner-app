import { Component } from "react";


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