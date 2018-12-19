import React, { Component } from "react";

export default class PostTile extends Component {
  render() {
    // console.log("why",this.props.post);
    const { post } = this.props;
    return (
      <ul className="row" key={post.key}>
        <div className="box">
          <h1>{post.title}</h1>
          <img src={post.image} alt="Where am i" />
          <h3>{/*post.headline*/}</h3>
          <span>{/*post.author*/}</span>
          <p>{/*post.body*/}</p>
        </div>
      </ul>
    );
  }
}
