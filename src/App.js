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
    LoggedIn(isLoggedIn){
        if (!isLoggedIn){
            return (<li><Link to="/">Login</Link></li>);
        }
        else{
            return (<li><Link to="/todo">Todo</Link></li>);
        }
        
        

    }
    render() {
        const LoginView = () => (
            <Login />
        );
        
        const About = () => (
            <div>
                <TodoApp />
        
            </div>);
        if(localStorage.getItem('isLoggedIn')== undefined){
            localStorage.setItem('isLoggedIn',false);
        }
        const isLoggedIn = localStorage.getItem('isLoggedin');
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
                        {this.LoggedIn(isLoggedIn)}
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
