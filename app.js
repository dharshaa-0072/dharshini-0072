import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from '/components/Navbar';
import Home from '/pages/Home';
import Project from '/pages/Project';

function App() {
    return (
        <Router>
            <div>
                <Navbar />
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/project/:id" component={Project} />
                </Switch>
            </div>
        </Router>
    );
}

export default App;