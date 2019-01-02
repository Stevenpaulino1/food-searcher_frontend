import React, { Component } from "react";
import UploadPhoto from "./CloudinaryWidget";
import { MDBInput } from 'mdbreact';

export default class PostForm extends Component {
  state = {
    title: "",
    headline: "",
    body: "",
    imageUrl: ""
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handlePhoto = imageUrl => {
    this.setState({ imageUrl });
  };

  render() {
    console.log(this.state);
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
            <MDBInput
              type="textarea"
              label="Icon Prefix"
              rows="2"
              icon="pencil"
              onChange={this.handleChange}
              placeholder="Whats on your mind?"
            />
          </label>

          <br />

           <button type="submit">Send Your Thoughts </button>
        </form>
      </div>
    );
  }
}
