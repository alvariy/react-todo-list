import React from 'react';

class TodoGroup extends React.Component{
    constructor(props){
    super(props);
    this.state = {
        inputValue : "",
        todo:[]
    }
    }

    renderTodos = () => {
    
        let todos = [];
        
        todos.push(this.state.inputValue);
        
        return todos;
    }

    handleChange = (event) => {
        this.setState({inputValue: event.target.value});
        console.log("inputValue = ", this.state.inputValue);
       };

       addTask = () => {    

        let todoss = [];
        todoss.push(this.state.todo);
        
        todoss.push(this.state.inputValue);
        this.setState({todo: todoss})
    }

    render(){
        let todos = this.renderTodos();
        return(       
            <div>
                <div>
           <input type="text" value = {this.state.inputValue} onChange={this.handleChange}/>
           <button onClick={this.addTask}>Add Task!</button>
           </div>
           <div>
           <div>
        {this.state.todo.map((item) => {
          return (
              <div>
                <div>
                <input type = "checkbox"></input>
                 <p>{item}</p>
               </div>
                </div>
          )
        })}
      </div>
           {/* {this.state.todo} */}
           </div>
       </div>
       );
    }
}
export default TodoGroup;