import React, { Component } from "react";
// import ItemCard from "./ItemCard";
import Search from "./Search";
// import style from "./style.css"

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
      limit: 12
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
//   renderResults = () => {
//     // return this.state.venues.map(venue => (
//     //   <ItemCard
//     //     key={venue.id}
//     //     venue={venue}
//     //     photo_url={venue.photo.prefix + "400x400" + venue.photo.suffix}
//     //   />
//     // ));
//     _______________________________________________
//   return this.state.venue.map(venue=> {
//               if (venue.photo) {
//                 <ItemCard
//                  key={venue.id}
//                  venue={venue}
//                  photo_url = {venue.photo.prefix + '400x400' + venue.photo.suffix}
//                  ratingColor = {'background-color: #' + venue.venue.ratingColor}
//                  category_icon = {venue.venue.categories[0].icon.prefix + '100' +  venue.venue.categories[0].icon.suffix}
//                  venue_url = {"https://foursquare.com/v/" + venue.venue.id}
//                 />
//             }})}
// ______________________________________
  // var photo_url = item.photo.prefix + '400x400' + item.photo.suffix
  // <a href={venue_url}>
  // getLocation(callback) {
  //     navigator.geolocation.getCurrentPosition(function(location) {
  //       callback(location.coords.latitude + ',' + location.coords.longitude)
  //     })
  //   }

  // get users location when I switch to a PWA

  render() {

    return (
      <div style={{paddingTop: "150px"}}>
      <Search setQuery={this.setQuery} fetchVenues={this.fetchVenues} />
      <div className="grid">
        <div className="col">
          <div className="row">


            { this.state.venues.map(item=> {
                  if (item.photo) {
                    var photo_url = item.photo.prefix + '400x400' + item.photo.suffix;
                    var ratingColor = 'background-color: #' + item.venue.ratingColor;
                    var category_icon = item.venue.categories[0].icon.prefix + '100' +  item.venue.categories[0].icon.suffix;
                    var venue_url = "https://foursquare.com/v/" + item.venue.id;
                    return (
                      <div className="col-md-4" key={item.venue.id}>
                      <a href={venue_url}>
                        <div class="box">
                          <img src={photo_url}/>
                          <div className="wrap">
                            <p className="venue_name">{item.venue.name}</p>
                            <p className="venue_address">{item.venue.location.address}, {item.venue.location.city}</p>
                            <span className="rating">{item.venue.rating}</span>
                            <span className="category"><img class="category_icon" src={category_icon} /></span>
                          </div>
                        </div>
                        </a>

                      </div>
                    )
                  }
                }) }
              </div>
              </div>
        {/*this.renderResults()*/}
      </div>
      </div>
    );
  }
}
