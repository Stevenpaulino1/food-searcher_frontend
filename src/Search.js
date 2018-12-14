import React, { Component } from 'react';
import style from './style.css';

export default class Venues extends Component {



render(){
  return(
<header className={style.header}>
  <div className={style.search}>
    <label>Find</label>
    <input className={style.query} type='text'name='query' onChange={this.props.setQuery} placeholder='Hungry for...?' />
    <span className={style.bar}>|</span>
    <label>Near</label>
    <input className={style.near} type='text'name='location' onChange={this.props.setLocation} placeholder='New York' />
    <button className={style.find} onClick={this.props.fetchVenues}> Search </button>
  </div>
</header>
)}



}
