import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import './App.css';

import MainContent from './container/MainContent';
import Footer from './presentational/Footer';
import ProgressReport from './presentational/report/ProgressReport';

import EditTodo from './presentational/todocomponents/EditTodo';
import CreateUser from './presentational/todocomponents/CreateUser';
import Home from './presentational/Home';


function App () {
    return (
        <Router>
            <div className="App">
                <div className="row">
                    <div className="col">
                        <ul className="social-links user-style">
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/user">Login/Register</Link></li>
                        </ul>
                    </div>
                </div>

                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/user" component={CreateUser} />
                    <Route path='/:user_id' component={MainContent} />
                    <Route path='/progress-report' render={(props) => (
                        <ProgressReport {...props} />)} />
                    {/*will implement this later*/}
                    <Route path="/edit/:id" component={EditTodo} />
                </Switch>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
