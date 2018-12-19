import React, { Component } from "react";
import UploadPhoto from "./CloudinaryWidget";
// let image

export default class PostForm extends Component {
  state = {
    title: "",
    headline: "",
    body: "",
    imageUrl: ""
  };

  handleChange = e => {
    // console.log("hittin", event.target.value)
    this.setState({ [e.target.name]: e.target.value });
  };

  handlePhoto = imageUrl => {
    this.setState({ imageUrl });
  };

  render() {
    // console.log(this.state);
    // if(this.state.img){
    //     image = <img className="box" src={this.state.imageUrl} alt=""/>
    //           }
    return (
      <div>
        <h1>Create a blog post </h1>
        <UploadPhoto handlePhoto={this.handlePhoto} />

        <form onSubmit={e => this.props.handleSubmit(e, this.state)}>
          <label>
            Photo:
            {/*<input type="text" name="image" readOnly value={this.state.image}/>*/}
            {/*image*/}
          </label>

          <label>
            Post Title:
            <input
              type="text"
              name="title"
              value={this.state.title}
              onChange={this.handleChange}
            />
          </label>

          <label>
            Post headline:
            <input
              type="text"
              name="headline"
              value={this.state.headline}
              onChange={this.handleChange}
              size="10"
            />
          </label>

          <br />

          <label>
            Body:
            <textarea
              rows="4"
              cols="50"
              name="body"
              value={this.state.body}
              onChange={this.handleChange}
            >
              Write whats on your hungry mind...
            </textarea>
          </label>

          <br />

          <button type="submit">Send Your Thoughts </button>
        </form>
      </div>
    );
  }
}
