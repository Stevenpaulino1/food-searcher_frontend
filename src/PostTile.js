import React, { Component } from "react";

export default class PostTile extends Component {
  render() {
    console.log("why",this.props.post.attributes);
    const { post } = this.props
    return (
      <ul key={post.key}>
        <div className="box">
          <h1>{/*post.title*/}</h1>
          <img src={post.attributes.image} alt="Where am i" />
          <h3>{/*post.headline*/}</h3>
          <span>{/*post.author*/}</span>
          <p>{/*post.body*/}</p>
        </div>
      </ul>
    );
  }
}
