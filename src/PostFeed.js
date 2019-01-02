import React, { Component } from "react";

import PostTile from "./PostTile";




class PostFeed extends Component {

  mapPosts = () => {
    return this.props.posts.map(post => <PostTile key={post.id} post={post} />)
  };


  render() {
    console.log("Array of posts",this.props.posts);
    return(
      <div className="row">
         {this.mapPosts()}

      </div>
    )
  }
}

export default PostFeed;
