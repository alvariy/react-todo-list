import React from 'react';

class Listss extends React.Component{
    constructor(props){
    super(props);
    this.state = {
        todoMessage : "",
        isChecked : false
    }
    }

    handleChange = (event) => {
        this.setState({isChecked: !this.state.isChecked});
       };

    render(){
        return(          
            <li className = {this.state.isChecked ? "checked" : ""}> <input type="checkbox" onChange = {this.handleChange} ></input>{this.props.inputMessage}</li>
       );
    }
}
export default Listss;