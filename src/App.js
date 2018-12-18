import React, { Component } from 'react';
// import logo from './logo.svg';
import MainContainer from './MainContainer'
import './App.css';


class App extends Component {

  handleRoute = event => {console.log(event)}




  render() {
    return (
      <div className="container">
        <MainContainer/>
      </div>
    );
  }
}

export default App;
//App will Render these components: MainContainer,Navbar, landing page,
