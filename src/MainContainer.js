import React, { Component } from 'react';
import Venues from './Venues'
import PostForm from './PostForm'
import PostFeed from './PostFeed'
import style from './style.css';





class MainContainer extends Component {
  state = {
    newPostObj:[],
    posts:[]
  }


  handleSubmit =(e,postObj) => {
    e.preventDefault()
    // debugger
    if (postObj.imageUrl==true){
      console.log("in the body");
    const options = {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({
        image: postObj.image,
        title: postObj.title,
        headline: postObj.headline,
        body: postObj.body,
        author: "Steven"
      })
      }
    fetch("http://localhost:3000/posts", options)
      .then(res => res.json())
      .then(newPostObj => this.setState({newPostObj}))
  }
}
  componentDidMount(){
    fetch("http://localhost:3000/posts")
    .then(r=>r.json())
    .then(posts => this.setState({posts}))
  }

  render() {
    return (
      <div >
        <PostForm handleSubmit={this.handleSubmit}/>

        <Venues/>
        <PostFeed posts={this.state.posts}/>

      </div>
    );
  }
}

export default MainContainer;
