import React, { Component } from "react";
// import logo from './logo.svg';

import "./App.css";
import Home from "./Home";
import Venues from "./Venues";
import PostForm from "./PostForm";
import HomeNavBar from "./HomeNavBar"
import PostFeed from "./PostFeed"
import Profile from './Profile'

import { Route, Switch, withRouter } from "react-router-dom";

class App extends Component {
  state = {
    newPostObj: [],
    posts: []
  };

  handleSubmit = (e, postObj) => {
    e.preventDefault();
    console.log("Post obj", postObj);
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
      })
    };
    fetch("http://localhost:3000/api/v1/posts", options)
      .then(res => res.json())
      // .then(newPost => console.log(newPost))
      .then(newPost =>
        this.setState({
          posts: [...this.state.posts, newPost.data]
        })
      )
      this.props.history.push("/home");
  };





  componentDidMount() {
    fetch("http://localhost:3000/api/v1/posts")
      .then(r => r.json())
      .then(posts => this.setState({posts:posts.data}))
  }



  render() {
    // console.log(this.state.posts);
    return (
      <div>
        <HomeNavBar/>
        <div className="container">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/home" render={()=><PostFeed posts={this.state.posts}/>} />
          <Route path="/explore" render={()=> <Venues/>} />
          <Route path="/form" render={()=> <PostForm handleSubmit={this.handleSubmit}/>} />
          <Route path="/profile" render={()=> <Profile user={this.state.user} posts={this.state.posts}/>}/>
        </Switch>
        </div>
      </div>
    );
  }
}

export default withRouter(App);
