import { Component } from 'react';

//class component
export default class FirstComponent extends Component {
    render(){
      return (
        <div className="secondComponent">
        How are you?
        </div>
      );
    }
  } 

//funtion component
export function SecondComponent() {
    return (
      <div className="secondComponent">
        My name is Santhosh!!
      </div>
    );
  }