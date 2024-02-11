import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import SignupOne from './SignupOne';
import SignupTwo from './SignupTwo';
import SignupThree from './SignupThree';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/signup" exact component={SignupOne} />
          <Route path="/signup-two" component={SignupTwo} />
          <Route path="/signup-complete" component={SignupThree} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
