import React from 'react';
export class Todo extends React.Component{
    constructor(props){
        super(props);  
    }
 
    render(){
 
        return(
            <div>
             <h2>{this.props.res.text} </h2>
             <h2>{this.props.res.priority} </h2>
             <h2>{this.props.res.dueDate.toString()} </h2>
            </div>
        );
    }
    

}