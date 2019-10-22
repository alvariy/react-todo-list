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

        this.setState({todo: [...this.state.todo,<Listss inputMessage = {this.state.inputValue}/>]})
   }

   handleChange = (event) => {
    this.setState({inputValue: event.target.value});
    console.log("inputValue = ", this.state.inputValue);
   };

  render()
  {  return (
    <div className="App">
      <header>
      </header>
      <body>
      <div><h2> To Do Exercise! </h2></div>
      <div>
           <input type="text" value = {this.state.inputValue} onChange={this.handleChange}/>
           <button onClick={this.addTask}>Add Task!</button>
           </div>

           <div>
             <ol>
           {this.state.todo}
           </ol>
           </div>
      </body>
    </div>
  );}
}


export default App;
