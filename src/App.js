import React, { Component } from 'react';
// import logo from './logo.svg';
// import MainContainer from './MainContainer'
import './App.css';
import Venues from './Venues/index'


class App extends Component {
  handleRoute = event => {console.log(event)}
  render() {
    return (
      <div >
        <Venues/>

      </div>
    );
  }
}

export default App;
//App will Render these components: MainContainer,Navbar, landing page,
