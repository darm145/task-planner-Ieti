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
    LoggedIn(logged) {
        console.log(logged);
        const LoginView = () => (
            <Login />
        );

        const About = () => (
            <div>
                <TodoApp />

            </div>);
        if (!logged) {
            return (
                <div>
                    <ul>
                        <li><Link to="/">Login</Link></li>
                    </ul>
                    <div>
                        <Route exact path="/" component={LoginView} />
                    </div>
                </div>
            );
        }
        else {
            return (
                <div>
                    <ul>
                    <li><Link to="/todo">Todo</Link></li>
                    </ul>
                    <div>
                    <Route path="/todo" component={About} />
                    </div>
                </div>
            );
        }



    }
    render() {
        
        if (localStorage.getItem('isLoggedIn') == undefined) {
            localStorage.setItem('isLoggedIn', false);
        }
        const loged = localStorage.getItem('isLoggedin');
        return (
            <Router>
                <div className="App">
                
                    <header className="App-header">
                        <img src={logo} className="App-logo" alt="logo" />
                        <h1 className="App-title">IETI App</h1>
                    </header>

                    <br />
                    <br /> 
                    {this.LoggedIn(loged)}
                </div>
            </Router>
        );
    }


}

export default App;
