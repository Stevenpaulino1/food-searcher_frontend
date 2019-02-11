import React, { Component } from "react";
import UploadPhoto from "./CloudinaryWidget";
import ContentEditable from 'react-contenteditable'
import sanitizeHtml from "sanitize-html";
import "./photoform.css"



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

componentDidUpdate(prevProps, prevState){
  console.log("prev state",prevProps);
  console.log("prevstate",prevState);
  console.log("state",this.state);
}
  render() {
    return (
      <div className="center">
        <h1>Create a blog post </h1>
        <UploadPhoto handlePhoto={this.handlePhoto} />

        <form onSubmit={e => this.props.handleSubmit(e, this.state)}>
          <label>
            Title:
            <input
              type="text"
              name="title"
              value={this.state.title}
              onChange={this.handleChange}
            />
          </label>
          <br/>
          <label>
            Headline:
            <input
              type="text"
              name="headline"
              value={this.state.headline}
              onChange={this.handleChange}
            />
          </label>

          <br />

          <label>
            Body:
            <MDBInput
              type="textarea"
              label="Medium input"
              rows="10"
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
