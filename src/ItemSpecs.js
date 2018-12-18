import React, { Component } from 'react'
var foursquare = require('react-foursquare')({
  clientID: 'IGLBFJIGQ1KUX5SCJNBSQ5HCFESA2ZORHZ1XML0BNK4HTDYX',
  clientSecret: 'BNESFLYITTVQZN0LJDUNENMKFNSN2O3DUHGDTS2ITB3Z2RM1'
});
export default class ItemSpecs extends Component {


  render(){
    var params = {
      "VENUE_ID": "5c17b830628c83002c3c077b"
    }
    // console.log("What is this?",foursquare.venues.getVenue(params).then(r => r.json()).then(console.log))

    console.log(this.props.venue);
    return (
      <div>This is ItemSpecs</div>
    )
  }

}
