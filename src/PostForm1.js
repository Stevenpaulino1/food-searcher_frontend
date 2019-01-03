import React, { Component } from "react";
import UploadPhoto from "./CloudinaryWidget";
import ContentEditable from 'react-contenteditable'
// import sanitizeHtml from "sanitize-html";
import EditTextButton from './EditTextButton';




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

  handleHTML = (e) => {

  this.setState({body: e.target.value});
}

  render() {
    console.log(this.state);
    return (
      <div className="center">
        <h1>Create a blog post </h1>
        <UploadPhoto handlePhoto={this.handlePhoto} />

        <form onSubmit={e => this.props.handleSubmit(e, this.state)}>
          <label>
            Post Title:
            <input
              type="text"
              name="title"
              value={this.state.title}
              onChange={this.handleChange}
            />
          </label>
          <br/>
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
            <div className="row justify-content-between" style={{fontSize:"1.25rem", height:"3rem", marginLeft:"0", marginRight:"0"}}>
                      <EditTextButton cmd="italic" />
                      <EditTextButton cmd="bold" />
                      <EditTextButton cmd="underline" />
                      <EditTextButton cmd="strikeThrough" />
                      <EditTextButton cmd="insertUnorderedList" />
                      <EditTextButton cmd="insertOrderedList" />
                      <EditTextButton cmd="indent" />
                      <EditTextButton cmd="outdent" />
                      <EditTextButton cmd="justifyLeft" />
                      <EditTextButton cmd="justifyCenter" />
                      <EditTextButton cmd="justifyRight" />
                  </div>
          <label>
            Body:
            <ContentEditable
            className="form-control"
            style={{height:"25vh", overflowY: "scroll", wordWrap:"break-word"}}
            name="content"
            html={this.state.body}
            onChange={this.handleHTML}
            placeholder="Tell us your story..."
          />
          </label>

          <br />

           <button type="submit">Send Your Thoughts </button>
        </form>
      </div>
    );
  }
}
