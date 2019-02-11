import React from "react";
import { MDBCol } from "mdbreact";
import { Link } from 'react-router-dom'
import wanderlust from "./wanderlust-.jpg"
import "./appPage.css"

class LandingPage extends React.Component {
  state = {
    collapsed: false
  };

  // handleTogglerClick = () => {
  //   this.setState({
  //     collapsed: !this.state.collapsed
  //   });
  // };

  render() {
console.log(this.props.handleClick)
    return (
      <div id="apppage" style={{backgroundImage: `url(${wanderlust})`}}>



        <div>
          <div  className="row">
            <MDBCol md="12" className="text-center">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </MDBCol>
          </div >
        </div>
        <Link to="/login"><button>Login</button></Link>

        <Link to="/signup"><button onClick={()=>this.props.handleClick}>Create a Profile</button></Link>
        
      </div>
    );
  }
}

export default LandingPage;
