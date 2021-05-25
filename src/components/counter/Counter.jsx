import { Component } from 'react'
import './Counter.css'

class Counter extends Component {
  // Define initial state in constructor
  //state=> counter 0

  constructor(){
    //this.state.counter wont work if dont use super
    super();
    this.state = {
      counter: 0
    }
    //bind increment with class to use this in increment method
    this.increment = this.increment.bind(this)
  }

  render(){
    return (
      <div className="counter">
        {/* this.increment because it has to refer to loacl function */}
        <button onClick={this.increment}>+1</button>
        <span className="count">{this.state.counter}</span>
      </div>
    );
  }

  increment(){//update state - counter++
    this.setState({
      counter: this.state.counter + 1
    });
  }
}


export default Counter