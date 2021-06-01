import { Component } from "react";
import { Link} from 'react-router-dom'

class WelcomeComponent extends Component{
    constructor(props){
        super(props);
        this.retrieveWelcomeMessage=this.retrieveWelcomeMessage(this);
    }
    render(){
        return(
            <div>
                <h1>Welcome {this.props.match.params.name}!!</h1>
                <div>
                    You can manage your tasks <Link to="/tasks">here</Link>.
                </div>
                <div>
                    Click here to get a customized welcome message.
                    <button className='btn btn-success' onClick={this.retrieveWelcomeMessage}>Get welcome message</button>                
                </div>
            </div>
        );
    }

    retrieveWelcomeMessage(){
        console.log('Retrieve click')
    }
}


export default WelcomeComponent