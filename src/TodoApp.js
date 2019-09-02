import React from 'react';
import { TodoList } from './TodoList.js'
import { Login } from './component/Login'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import  DatePicker  from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";


export class TodoApp extends React.Component {

  constructor(props) {
    super(props);
    this.state = { items: [], text: '', priority: 0, dueDate: new Date() };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDate = this.handleDate.bind(this);
  }

  render() {
    return (
      <div>
        <div>
          <h2>Welcome {localStorage.getItem("mailLogged")}</h2>
          <h3>TODO</h3>
          <TodoList items={this.state.items} />
          <form onSubmit={this.handleSubmit}>
            {/** 
            <label htmlFor="new-todo">
              What needs to be done?
            </label>
            <input type="text"
              id="text-todo"
              value={this.state.text}
              onChange={this.handleChange}
            />
            */}
            <TextField
              id="text-todo"
              label="Text"

              value={this.state.text}
              onChange={this.handleChange}
              margin="normal"
            />
            <TextField
              id="priority-todo"
              label="Number"
              type="number"
              value={this.state.priority}
              onChange={this.handleChange}
              margin="normal"
            />
            
            <DatePicker
            id="date-todo"
              selected={this.state.dueDate}
              onChange={this.handleDate}/>
              
              
    
            <Button variant="contained" color="primary" type="submit">
              Add #{this.state.items.length + 1}
            </Button>
          </form>
          <Button variant="contained" color="secondary" onClick={this.logOut}>
            Log out
            </Button>
        </div>
        {/** <div id="Login"><Login></Login></div> */}

      </div>
    );
  }
  logOut() {
    localStorage.removeItem("isLoggedin");
    window.location.reload();
  }

  handleChange(e) {

    this.setState({ text: document.getElementById("text-todo").value });
    this.setState({ priority: document.getElementById("priority-todo").value });
    
  }
  handleDate(e){
    this.setState({dueDate:e});
  }

  handleSubmit(e) {
    e.preventDefault();
    if (!this.state.text.length) {
      return;
    }
    const newItem = {
      text: this.state.text,
      priority: this.state.priority,
      dueDate: this.state.dueDate
    };
    console.log(newItem);
    this.setState(prevState => ({
      items: prevState.items.concat(newItem),
      text: ''
    }));
  }
}

export default TodoApp;