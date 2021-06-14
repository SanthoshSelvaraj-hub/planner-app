import { Component } from "react";
import { Link} from 'react-router-dom';
import HelloWorldService from '../../api/planner/HelloWorldService'

class WelcomeComponent extends Component{
    constructor(props){
        super(props);
        this.retrieveWelcomeMessage=this.retrieveWelcomeMessage.bind(this);
        this.handleSuccessfulResponse=this.handleSuccessfulResponse.bind(this);
        this.handleError=this.handleError.bind(this);
        this.state={
            welcomeMessage: '',
            
        }
    }

    render(){
        return(
            <div>
                <h1>Welcome {this.props.match.params.name}!!</h1>
                <div>
                    You can manage your tasks <Link to="/tasks">here</Link>.
                </div>
                {/* <div>
                    Click here to get a customized welcome message.
                    <button className='btn btn-success' onClick={this.retrieveWelcomeMessage}>Get welcome message</button>                
                </div>
                <div className="container">
                    {this.state.welcomeMessage}
                </div> */}
            </div>
        );
    }

    retrieveWelcomeMessage(){
        HelloWorldService.executeHelloWorldService(this.props.match.params.name)
        .then(response=>this.handleSuccessfulResponse(response))
        .catch(error=>this.handleError(error))  
    }

    handleSuccessfulResponse(response){
        console.log(response)
        this.setState({welcomeMessage : response.data.message})
    }
 
    handleError(error){
        console.log(error.response)
        let errorMessage = '';

        if(error.message)
            errorMessage += errorMessage

        if(error.response && error.response.data){
            errorMessage += error.response.data.message
        }

        this.setState({welcomeMessage : errorMessage})
        
    }
}


export default WelcomeComponent