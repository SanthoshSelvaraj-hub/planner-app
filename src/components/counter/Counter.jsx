import { Component } from 'react'
import {PropTypes} from 'prop-types'
import './Counter.css'

class Counter extends Component{

  constructor(){
    //this.state.counter wont work if dont use super
    super();
    this.state = {
      counter: 0
    }
    //bind increment with class to use this in increment method
    this.increment = this.increment.bind(this)
    this.decrement = this.decrement.bind(this)
    this.reset = this.reset.bind(this)
  }

  render(){
    return (
      <div className="counter">
        <CounterButton  by={1} incrementMethod={this.increment} decrementMethod={this.decrement}/>
        <CounterButton by={10} incrementMethod={this.increment} decrementMethod={this.decrement}/>
        <CounterButton by={50} incrementMethod={this.increment} decrementMethod={this.decrement}/>
        <span className="count">{this.state.counter}</span>
        <div>
          <button className="reset" onClick={this.reset}>Clear</button>
        </div>
      </div>
    );
  }

  reset(){//update state - counter++
    //console.log(`increment in parent - ${by}`)
    this.setState({counter: 0});
  }

  increment(by) {//update state - counter++
    //console.log(`increment in parent - ${by}`)
    this.setState({
      counter: this.state.counter + by
    });
  }

  decrement(by) {//update state - counter++
    //console.log(`increment in parent - ${by}`)
    this.setState({
      counter: this.state.counter - by
    });
  }
}

class CounterButton extends Component {
  // Define initial state in constructor
  //state=> counter 0

  //Binding is not necesarry while using arrow function
  render(){
    return (
      <div className="counterButton">
        {/* this.increment because it has to refer to loacl function */}
        <button onClick={()=>this.props.incrementMethod(this.props.by)}>+{this.props.by}</button>
        <button onClick={()=>this.props.decrementMethod(this.props.by)}>-{this.props.by}</button>
      </div>
    );
  }

//   increment() {//update state - counter++
    
//     this.setState(
//       () => {
//         return {counter: this.state.counter + this.props.by}
//     }
//     );
//     this.props.incrementMethod(this.props.by);
//   }

//   decrement() {//update state - counter++
    
//     this.setState(
//       () => {
//         return {counter: this.state.counter - this.props.by}
//     }
//     );
//     this.props.decrementMethod(this.props.by);
//   }
}

CounterButton.defaultProps = {
  by : 1
}

CounterButton.propTypes ={
  by : PropTypes.number
}


export default Counter