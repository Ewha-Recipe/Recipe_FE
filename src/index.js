import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import SignupForm from './signup/SignupForm';
import LoginForm from './login/LoginForm';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Switch>
        <Route path="/signup" component={SignupForm} />
        <Route path="/login" component={LoginForm} />
      </Switch>
    </BrowserRouter>
  </React.StrictMode>
);
