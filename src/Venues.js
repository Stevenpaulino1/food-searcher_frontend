import React, { Component } from "react";
import ItemCard from "./ItemCard";
import Search from "./Search";
import style from "./style.css";

var foursquare = require("react-foursquare")({
  clientID: "IGLBFJIGQ1KUX5SCJNBSQ5HCFESA2ZORHZ1XML0BNK4HTDYX",
  clientSecret: "BNESFLYITTVQZN0LJDUNENMKFNSN2O3DUHGDTS2ITB3Z2RM1"
});

export default class Venues extends Component {
  state = {
    venues: [],
    query: "",
    location: "New York City, Ny"
  };

  componentDidMount() {
    this.fetchVenues();
  }

  setQuery = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  fetchVenues = () => {
    var params = {
      near: this.state.location,
      intent: "browse",
      query: this.state.query,
      limit: 9
      // 'category':'4d4b7105d754a06374d81259'
    };
    // console.log("What is this?",foursquare)
    // debugger
    foursquare.venues.recommendations(params)
    // foursquare.venues.getVenuePhotos(params)
    // foursquare.venues.getVenues({ near: "Brooklyn, NY", query: "Joya" })
    .then(res =>
      this.setState({ venues: res.response.group.results })
    );
    // debugger;
  };

  //
  renderResults = () => {
    return this.state.venues.map(venue => (
      <ItemCard
        key={venue.id}
        venue={venue}
        photo_url={venue.photo.prefix + "400x400" + venue.photo.suffix}
      />
    ));
  };

  // var photo_url = item.photo.prefix + '400x400' + item.photo.suffix
  // <a href={venue_url}>
  // getLocation(callback) {
  //     navigator.geolocation.getCurrentPosition(function(location) {
  //       callback(location.coords.latitude + ',' + location.coords.longitude)
  //     })
  //   }

  // get users location when I switch to a PWA

  render() {
    // console.log("My current state",this.state.venues);
    return (
      <div className={style.container}>
        <Search setQuery={this.setQuery} fetchVenues={this.fetchVenues} />
        {this.renderResults()}
      </div>
    );
  }
}
