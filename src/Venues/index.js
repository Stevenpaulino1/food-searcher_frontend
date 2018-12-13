import React, { Component } from 'react';
import style from './style.css';

var foursquare = require('react-foursquare')({
  clientID: 'IGLBFJIGQ1KUX5SCJNBSQ5HCFESA2ZORHZ1XML0BNK4HTDYX',
  clientSecret: 'BNESFLYITTVQZN0LJDUNENMKFNSN2O3DUHGDTS2ITB3Z2RM1'
});
export default class Venues extends Component {
  state = {
    items: [],
    query: '',
    near: 'New York City, Ny'
  };
componentDidMount() {
    this.fetchVenues();
  }

fetchVenues = () => {
    var params = {
      "near": this.state.near,
      "intent": 'browse',
      'query': this.state.query
    };
    foursquare.venues.recommendations(params)
      .then(res=> {
        console.log("After the fetch",res)
        this.setState({ items: res.response.group.results });
      })
  }



setQuery = e => {
      this.setState({ query: e.target.value });
  }
  setLocation = e => {
      this.setState({ near: e.target.value });
  }


renderResults = () => {
   this.state.items.map(item => {
    if (item.photo) {
      var photo_url = item.photo.prefix + '400x400' + item.photo.suffix;
      var ratingColor = 'background-color: #' + item.venue.ratingColor;
      var category_icon = item.venue.categories[0].icon.prefix + '100' +  item.venue.categories[0].icon.suffix;
      var venue_url = "https://foursquare.com/v/" + item.venue.id;
      return (
        <div className={style.row} key={item.venue.id}>
        <a href={venue_url}>
          <div className={style.box}>
            <img src={photo_url} alt=''/>
            <div className={style.wrap}>
              <p className={style.venue_name}>{item.venue.name}</p>
              <p className={style.venue_address}>{item.venue.location.address}, {item.venue.location.city}</p>
              <span className={style.rating} style={ratingColor}>{item.venue.rating}</span>
              <span className={style.category}><img className={style.category_icon} src={category_icon} alt='' /></span>
            </div>
          </div>
          </a>
        </div>
      )
    }
  })
}



render() {
  console.log("Before my return",this.state);
    return (
        <div className={style.container}>
          <header className={style.header}>
            <div className={style.search}>
              <label>Find</label>
              <input className={style.query} type='text' onChange={this.setQuery} placeholder='Hungry for...?' />
              <span className={style.bar}>|</span>
              <label>Near</label>
              <input className={style.near} type='text' onChange={this.setLocation} placeholder='New York' />
              <button className={style.find} onClick={this.fetchVenues}> Search </button>
            </div>
          </header>
            {this.renderResults()}
        </div>
      )
  }
}
