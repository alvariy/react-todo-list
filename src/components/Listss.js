import React from 'react';

class Listss extends React.Component{
    constructor(props){
    super(props);
    this.state = {
        todoMessage : ""
    }
    }

    render(){
        return(          
            <li><input type="checkbox"></input>{this.props.inputMessage}</li>
       );
    }
}
export default Listss;