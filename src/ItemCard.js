import React, { Component } from "react";
import ItemSpecs from "./ItemSpecs";

class ItemCard extends Component {
  state = {
    clicked: true
  };

  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };

  render() {
    const { venue, photo_url } = this.props;
    // console.log(venue);
    return (
      <ul className="row" onClick={() => this.handleClick()}>
        {this.state.clicked ? (
          <div className="box">
            <img src={photo_url} alt="Where am i" />
            <h1>{venue.venue.name}</h1>
            <h4>{venue.snippets.items[0].detail.object.text}</h4>
          </div>
        ) : (
          <ItemSpecs venue={venue.venue} />
        )}
      </ul>
    );
  }
}

export default ItemCard;
