import React, { Component } from "react";
import Venues from "./Venues";
import PostFeed from "./PostFeed";
import style from "./style.css";
import PostForm from "./PostForm";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class MainContainer extends Component {
  state = {
    newPostObj: [],
    posts: []
  };

  handleSubmit = (e, postObj) => {
    e.preventDefault();
    // console.log(postObj);
    // debugger
    // console.log("in the body");
    const options = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        image: postObj.imageUrl,
        title: postObj.title,
        headline: postObj.headline,
        body: postObj.body,
        author: "Steven"
      })
    };
    fetch("http://localhost:3000/posts", options)
      .then(res => res.json())
      .then(newPost =>
        this.setState({
          posts: [...this.state.posts, newPost]
        })
      );
  };

  componentDidMount() {
    fetch("http://localhost:3000/posts")
      .then(r => r.json())
      .then(posts => this.setState({ posts }));
  }

  render() {
    return (
      <Router>
        <div>
        <h1>Today's posts</h1>
          <PostFeed posts={this.state.posts} />
          <Route exact path="/explore" component={Venues} />
          <Route exact path="/createPost" component={PostForm} />
        </div>
      </Router>
    );
  }
}

export default MainContainer;
