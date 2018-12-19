import React, { Component } from "react";
// import logo from './logo.svg';
import MainContainer from "./MainContainer";
import "./App.css";
import Home from "./Home";
import Venues from "./Venues";
import PostForm from "./PostForm";
import HomeNavBar from "./HomeNavBar"


import { Route, Switch } from "react-router-dom";

class App extends Component {
  handleRoute = event => {
    console.log(event);
  };

  render() {
    return (
      <div>
        <HomeNavBar/>
        <div className="container">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/home" component={MainContainer} />
          <Route path="/explore" render={()=> <Venues/>} />
          <Route path="/form" render={()=> <PostForm/>} />
        </Switch>
        </div>
      </div>
    );
  }
}

export default App;
