import React, { Component } from "react";
// import logo from './logo.svg';
import MainContainer from "./MainContainer";
import "./App.css";
import Home from "./Home";

import { Route, Switch } from "react-router-dom";

class App extends Component {
  handleRoute = event => {
    console.log(event);
  };

  render() {
    return (
      <div className="container">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/home" component={MainContainer} />
        </Switch>
      </div>
    );
  }
}

export default App;
//App will Render these components: MainContainer,Navbar, landing page,
