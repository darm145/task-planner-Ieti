import React from 'react';
import logo from './logo.svg';
import './App.css';
import { TodoList } from './TodoList.js'
import { BrowserRouter as Router, Link, Route } from 'react-router-dom'
import { Login } from "./component/Login";
import { TodoApp } from "./TodoApp";



class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const LoginView = () => (
            <Login />
        );
        
        const About = () => (
            <div>
                <TodoApp />
        
            </div>);
        return (
            <Router>
                <div className="App">
                    <header className="App-header">
                        <img src={logo} className="App-logo" alt="logo"/>
                        <h1 className="App-title">TODO React App</h1>
                    </header>

                    <br/>
                    <br/>

                    <ul>
                        <li><Link to="/">Login</Link></li>
                        <li><Link to="/todo">Todo</Link></li>
                    </ul>

                    <div>
                        <Route exact path="/" component={LoginView}/>
                        <Route path="/todo" component={About}/>
                    </div>
                </div>
            </Router>
        );
    }


}

export default App;
