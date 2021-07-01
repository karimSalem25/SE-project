import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Login from './Login';
import reportWebVitals from './reportWebVitals';
import { Route, Switch,BrowserRouter } from "react-router-dom";
import SignUp from './SignUp';
import TA from './TA';
import Admin from './Admin';
import Apply from './Apply' ;
import CPerSem from './CPerSem';



ReactDOM.render(
   <BrowserRouter>
  <Switch>

  <Route exact path="/">
    <Login />
  </Route>
  <Route exact path="/Schedule">
    <App />
  </Route>
  <Route exact path="/SignUp">
    <SignUp />
  
  </Route>
  <Route exact path="/TA">
    <TA />
  
  </Route>
  
  
  <Route exact path="/Apply">
    <Apply />
  
  </Route>

  <Route exact path="/Admin">
    <Admin />
  
  </Route>
  <Route exact path="/PER">
    <CPerSem />
  
  </Route>

   
</Switch></BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
