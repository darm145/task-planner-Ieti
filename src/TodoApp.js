import React from 'react';
import {TodoList} from './TodoList.js'
class TodoApp extends React.Component {
    constructor(props) {
      super(props);
      this.state = { items: [], text: '' ,priority:0, dueDate:Date()};
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }

    render() {
      return (
        <div>
        <div>
          <h3>TODO</h3>
          <TodoList items={this.state.items} />
          <form onSubmit={this.handleSubmit}>
            <label htmlFor="new-todo">
              What needs to be done?
            </label>
            <input type="text"
              id="text-todo"
              value={this.state.text}
              onChange={this.handleChange}
              
            />
            <input type="number"
              id="priority-todo"
            
              onChange={this.handleChange}
              value={this.state.priority}
            />
            <input type="date"
              id="date-todo"
              onChange={this.handleChange}
              value={this.state.dueDate}
            />
            <button>
              Add #{this.state.items.length + 1}
            </button>
          </form>
        </div>
        <div id="TODOS"></div>
        </div>
      );
    }
  
    handleChange(e) {
        //revisar aca valores
        this.setState({ text: document.getElementById("text-todo").value });
        this.setState({ priority: document.getElementById("priority-todo").value });
        this.setState({ dueDate: document.getElementById("date-todo").value });
    }
    
    handleSubmit(e) {
      e.preventDefault();
      if (!this.state.text.length) {
        return;
      }
      const newItem = {
        text: this.state.text,
        priority:this.state.priority,
        dueDate:this.state.dueDate
      };
      console.log(newItem);
      this.setState(prevState => ({
        items: prevState.items.concat(newItem),
        text: ''
      }));
    }
  }
  export default TodoApp;