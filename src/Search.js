import React, { Component } from "react";
import style from "./style.css";

export default class Venues extends Component {
  render() {
    return (
      <header className="header">
        <div className="search">
          <label>Find</label>
          <input
            className="query"
            type="text"
            name="query"
            onChange={this.props.setQuery}
            placeholder="Hungry for...?"
          />
          <span className="bar">|</span>
          <label>Near</label>
          <input
            className="near"
            type="text"
            name="location"
            onChange={this.props.setQuery}
            placeholder="New York"
          />
          <button className="find" onClick={this.props.fetchVenues}>
            {" "}
            Search{" "}
          </button>
        </div>
      </header>
    );
  }
}
