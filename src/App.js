import React, { Component } from "react";
// import logo from './logo.svg';
import "./App.css";
import LandingPage from "./landingPage";
import Venues from "./Venues";
import PostForm from "./PostForm";
import HomeNavBar from "./HomeNavBar"
import PostFeed from './PostFeed.js'
import Profile from './Profile'
import SignUp from './SignUp'

import { Route, Switch, withRouter } from "react-router-dom";

class App extends Component {
  state = {
    newPostObj: [],
    posts: [],
    users: []
  };

// ----------------------------------SIGNUP---------------------------------
  handleSignup = (e, userInfo) => {
    console.log("in handleSubmit", userInfo)
  e.preventDefault()
  this.createUser(userInfo)
}

createUser = userInfo => {
  fetch('http://localhost:3000/api/v1/users', {
    method: 'POST',
    headers: {"Content-type": 'application/json',"Accepts": 'application/json'},
    body: JSON.stringify({
      user: {
        first_name: userInfo.first_name,
        last_name: userInfo.last_name,
        city: userInfo.city,
        state: userInfo.state,
        username: userInfo.username,
        password: userInfo.password
      }
    })
  }).then(res => res.json())
  .then(user =>
    this.setState({users: [...this.state.users, user]})
   )
    this.props.history.push("/profile")
  }
// ----------------------------signup------------------------------------



  handleSubmit = (e, postObj) => {
    e.preventDefault();
    console.log("Post obj", postObj);
    // debugger
    // console.log("in the body");
    const options = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        src: postObj.imageUrl,
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

        <Switch>

          <Route exact path="/" render={()=><LandingPage/>}/>
          <Route path='/signup' render={ ()=> <SignUp handleSignup={this.handleSignup}/> }/>
          <Route path="/home" render={()=><PostFeed posts={this.state.posts}/>} />
          <Route path="/explore" render={()=> <Venues/>} />
          <Route path="/form" render={()=> <PostForm handleSubmit={this.handleSubmit}/>} />
          <Route path="/profile" render={()=> <Profile user={this.state.user} posts={this.state.posts}/>}/>
        </Switch>

      </div>
    );
  }
}

export default withRouter(App);
