
import React, { Component } from 'react';
import { MDBRow } from 'mdbreact';
import ProfileTile from './profileTile'

class Profile extends Component {


  // componentDidMount(){
  //   fetch('http://localhost:3000/api/v1/users')
  //   .then(r=>r.json())
  //   .then(users => this.setState({users: users.data}))
  // }

  // mappingUsers = () => {
  //   return this.state.users.map(user => <ProfileTile key={user.id} user={user}/>)
  // }
  mappingUsers = () => {
    return this.props.users.map(user => <ProfileTile key={user.id} user={user}/>)
  }


  render() {
    console.log(this.props.users);
    return (
      <MDBRow>

        {this.mappingUsers()}


      </MDBRow>
    )
  }
}

export default Profile
