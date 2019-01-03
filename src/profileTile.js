import React, { Component } from 'react';
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBRow, MDBCol } from 'mdbreact';

class ProfileTile extends Component {
  state = {
    clicked: true
  };

  handleClick = () => {
    console.log("Hitting handle");
    this.setState({ clicked: !this.state.clicked });
  };

  render() {
    console.log("Profile Tile",this.props.user);
    return (
        <MDBCol>
          <MDBCard wide>
            <MDBCardImage cascade className="img-fluid" src={this.props.user.attributes.photoimage} alt="This person decided not to uploaded a picture booo" />
            <MDBCardBody cascade>
              <MDBCardTitle>{this.props.user.attributes["first-name"]}</MDBCardTitle>
              <MDBCardText>{this.props.user.attributes.bio}</MDBCardText>
              <MDBBtn onClick={() => this.handleClick()}>More info</MDBBtn>
              {this.state.clicked ? (null):(
                <div>
                  <a href={this.props.user.attributes.socialprofile} target="_blank">Social Media </a>
                  </div>
              )}
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
    )
  }
}

export default ProfileTile
