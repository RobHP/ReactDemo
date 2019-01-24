import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Header } from './component/header/Header.js'
import HomePage from './component/homepage/HomePage.js'
import { Switch, Route } from 'react-router-dom';
import Login from './component/login/Login'
import { Profile} from './component/profile/Profile'

class App extends Component {
  render() {
    return (
      <div className="App">
{/*
<p> Hello Robert <7p>
<p> How are you? </p>
*/}
<Header />
<Switch>
	<Route exact path="/" component={HomePage}/>
	<Route exact path="/login" component={Login}/>
	<Route exact path="/profile" component={Profile}/>
</Switch>
</div>
);
  }
}

export default App;
