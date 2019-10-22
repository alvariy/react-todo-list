import React from 'react';
import logo from './logo.svg';
import './App.css';
import Listss from './components/Listss';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      inputValue : "",
      todo:[]
    }
  }

   addTask = () => {    

        let todoss = [];
        todoss.push(this.state.todo);

        todoss.push(<Listss inputMessage = {this.state.inputValue}/>);
        this.setState({todo: todoss})
   }

   handleChange = (event) => {
    this.setState({inputValue: event.target.value});
    console.log("inputValue = ", this.state.inputValue);
   };

  render()
  {  return (
    <div className="App">
      <header className="App-header">
      <div>
           <input type="text" value = {this.state.inputValue} onChange={this.handleChange}/>
           <button onClick={this.addTask}>Add Task!</button>
           </div>

           <div>
             <ol>
           {this.state.todo}
           </ol>
           </div>

      </header>
    </div>
  );}
}


export default App;
