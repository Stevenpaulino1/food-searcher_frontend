import React, { Component } from "react";
import "./Post.css"



export default class PostTile extends Component {
  render() {
    console.log("why",this.props.post.attributes);
    const { post } = this.props
    return (


        <div key={post.key} className="col-md-4">
          <img src={post.attributes.src} className="img-thumbnail" alt=""  />
            <b><h1>{post.attributes.title}</h1></b>

          <i><h4>{post.attributes.headline}</h4></i>
          <span>{/*post.author*/}</span>
          <p dangerouslySetInnerHTML={{__html:post.attributes.body}}></p>
        </div>

    );
  }
}
// <p className="card-text" dangerouslySetInnerHTML={{__html: this.props.post.original_post.content}}></p>
