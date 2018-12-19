import React, { Component } from "react";
import PostTile from "./PostTile";

class PostFeed extends Component {
  //try and see if you can refactor ItemCard to use here for post card later

  mapPosts = () => {
    return this.props.posts.map(post => <PostTile key={post.id} post={post} />);
  };
  render() {
    // console.log(this.props);
    return <div>{this.mapPosts()}</div>;
  }
}

export default PostFeed;
