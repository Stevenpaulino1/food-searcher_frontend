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
    posts: [],
    user:[]
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
      )
      this.props.history.push("/home");
  };
  componentDidMount() {
    fetch("http://localhost:3000/posts")
      .then(r => r.json())
      .then(posts => this.setState({ posts }))
      .then(this.getUser())
  }

getUser = () => {
  fetch("http://localhost:3000/user")
    .then(r => r.json())
    .then(user => this.setState({user}))
}

  render() {
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
