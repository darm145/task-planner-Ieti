import React from 'react';
import {Todo} from './Todo'

export class TodoList extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        const list=this.props.todoList.map((Obj,i) =>
           <li><Todo
           res={Obj}
           />
           </li> 
        );
        
        
        return (
            <ul>{list}</ul>
            
        );
    }
}