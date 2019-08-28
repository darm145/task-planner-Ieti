import React from 'react';
import {Todo} from './Todo'

export class TodoList extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        const list=this.props.items.map((Obj,i) =>
           <li id={i}><Todo
           res={Obj}
           />
           </li> 
        );
        
        
        return (
            <ul>{list}</ul>
            
        );
    }
}