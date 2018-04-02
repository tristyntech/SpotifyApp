import React, { Component } from 'react';
import './app.css';

// Custom Component Imports
import AppBar from './Components/AppBar.js';
import Table from './Components/Table.js';

import AuthToken from './AuthToken.js'

class App extends Component {
  constructor(){
    super();
    this.state = {
      filteredResults: [],
      searchQuery:'',
      isAlphabeticalFilter: true
    }

    this.filterByTrack = (musicList) => {
      let filteredResults;
      if (this.state.isAlphabeticalFilter) {
        filteredResults = musicList.sort(function(a, b) {
          let textA = a.name.toUpperCase();
          let textB = b.name.toUpperCase();
          return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
        });
      } else {
        filteredResults = musicList.sort(function(a, b) {
            let textA = a.name.toUpperCase();
            let textB = b.name.toUpperCase();
            return (textA > textB) ? -1 : (textA < textB) ? 1 : 0;
        });
      }
      this.setState({ filteredResults, isAlphabeticalFilter: !this.state.isAlphabeticalFilter })
    }

    this.filterByArtist = (musicList) => {
      let filteredResults;
      if (this.state.isAlphabeticalFilter) {
        filteredResults = musicList.sort(function(a, b) {
          let textA = a.artists[0].name.toUpperCase();
          let textB = b.artists[0].name.toUpperCase();
          return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
        });
      } else {
        filteredResults = musicList.sort(function(a, b) {
          let textA = a.artists[0].name.toUpperCase();
          let textB = b.artists[0].name.toUpperCase();
          return (textA > textB) ? -1 : (textA < textB) ? 1 : 0;
        });
      }
      this.setState({ filteredResults, isAlphabeticalFilter: !this.state.isAlphabeticalFilter })
    }

    this.filterByAlbum = (musicList) => {
      let filteredResults;
      if (this.state.isAlphabeticalFilter) {
        filteredResults = musicList.sort(function(a, b) {
            let textA = a.album.name.toUpperCase();
            let textB = b.album.name.toUpperCase();
            return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
        });
      } else {
        filteredResults = musicList.sort(function(a, b) {
          let textA = a.album.name.toUpperCase();
          let textB = b.album.name.toUpperCase();
          return (textA > textB) ? -1 : (textA < textB) ? 1 : 0;
        });
      }
      this.setState({ filteredResults, isAlphabeticalFilter: !this.state.isAlphabeticalFilter })
    }

    this.runSearch = () => {
      if (this.state.searchQuery.length) {
        const config = {
          headers: {
            "Authorization": ("Bearer " + AuthToken)
          }
        }
        fetch('https://api.spotify.com/v1/search?q='+this.state.searchQuery+'&type=artist,track,album&limit=30', config)
        .then((results)=>{
          return results.json();
        })
        .then((results) => {
          this.setState({ filteredResults: results.tracks.items })
        })
      }
    }

    this.updateQuery = (e) => {
      let searchQuery = e.target.value === ' ' ? '+' : e.target.value;
      this.setState({ searchQuery })
    }
  }

  render() {
    return (
      <div id="container">
        <div id="app-container">
          <AppBar
            onClick={this.runSearch.bind(this)}
            onChange={this.updateQuery.bind(this)}
          />
          <Table
            onClickTrack = {this.filterByTrack.bind(this)}
            onClickArtist = {this.filterByArtist}
            onClickAlbum = {this.filterByAlbum}
            items={this.state.filteredResults.length ? this.state.filteredResults : []}
          />
        </div>
      </div>
    );
  }
}

export default App;
