import React, { Component } from 'react';
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBRow, MDBCol } from 'mdbreact';

class ProfileTile extends Component {


  render() {
    console.log(this.props.user);
    return (
        <MDBCol>
          <MDBCard wide>
            <MDBCardImage cascade className="img-fluid" src="https://static1.squarespace.com/static/587698341e5b6c7bb7482c55/t/58879a42f7e0abc9d8293be6/1485285074557/stevenpPortrait?format=1500w" />
            <MDBCardBody cascade>
              <MDBCardTitle>{this.props.user.attributes["first-name"]}</MDBCardTitle>
              <MDBCardText>{this.props.user.attributes.bio}</MDBCardText>
              <MDBBtn href="#">More info</MDBBtn>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
    )
  }
}

export default ProfileTile
