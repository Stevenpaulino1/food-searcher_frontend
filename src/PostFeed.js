import React, { Component } from "react";
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
import PostTile from "./PostTile";




class PostFeed extends Component {

  mapPosts = () => {
    return this.props.posts.map(post => <PostTile key={post.id} post={post} />)
  };


  render() {
    console.log("Array of posts",this.props.posts);
    return(
      <MDBContainer className="mt-4">
        <MDBRow >
         {this.mapPosts()}
         </MDBRow>
      </MDBContainer>
    )
  }
}

export default PostFeed;
