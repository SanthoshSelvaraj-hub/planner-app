
import './App.css';
//default component
import  FirstComponent,{SecondComponent} from './components/learning-examples/FirstComponent';
import  ThirdComponent from './components/learning-examples/ThirdComponent';
import  {FourthComponent} from './components/learning-examples/SecondComponent';
import Counter from './components/counter/Counter'
import { Component } from 'react';

class App extends Component{
  render(){
    return (
      <div className="App">
        <Counter></Counter>
      </div>
    );
  }
}

// function App() {
//   return(
//     <div className="App">
//       <LearningComponents />
//     </div>
//   );
// }

class LearningComponents extends Component{
  render(){
    return (
      <div className="learningComponents">
        Hello World
        <FirstComponent></FirstComponent>
        <SecondComponent />
        <ThirdComponent />
        <FourthComponent />
      </div>
    );
  }
}


export default App;
