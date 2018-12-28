import React, { Component } from "react";
import PostFeed from './PostFeed'

export default class Profile extends Component {

  render(){
    console.log("What are my props",this.props);
      const { user }= this.props
    return(
      <div>
      <img src={user.image} alt="user img"/>
      <h1>Welcome {user.first_name}!</h1>
      <h2> {user.bio}</h2>
      <h3>{user.city}, {user.state}</h3>
      <PostFeed posts={this.props.posts}/>
      </div>
    )
  }
}
