import React, { Component } from 'react';
import './app.css'

// Custom Component Imports
import AppBar from './Components/AppBar.js'
import Table from './Components/Table.js'

class App extends Component {
  constructor(){
    super();
    this.state = {
      filteredResults: [],
      searchQuery:'',
      height: 100,
      isAlphabeticalFilter: true
    }

    this.filterByTrack = (array) => {
      let filteredResults;
      if (this.state.isAlphabeticalFilter) {
        filteredResults = array.sort(function(a, b) {
          let textA = a.name.toUpperCase();
          let textB = b.name.toUpperCase();
          return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
        });
      } else {
        filteredResults = array.sort(function(a, b) {
            let textA = a.name.toUpperCase();
            let textB = b.name.toUpperCase();
            return (textA > textB) ? -1 : (textA < textB) ? 1 : 0;
        });
      }
      this.setState({ filteredResults, isAlphabeticalFilter: !this.state.isAlphabeticalFilter })
    }

    this.filterByArtist = (array) => {
      let filteredResults;
      if (this.state.isAlphabeticalFilter) {
        filteredResults = array.sort(function(a, b) {
          let textA = a.artists[0].name.toUpperCase();
          let textB = b.artists[0].name.toUpperCase();
          return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
        });
      } else {
        filteredResults = array.sort(function(a, b) {
          let textA = a.artists[0].name.toUpperCase();
          let textB = b.artists[0].name.toUpperCase();
          return (textA > textB) ? -1 : (textA < textB) ? 1 : 0;
        });
      }
      this.setState({ filteredResults, isAlphabeticalFilter: !this.state.isAlphabeticalFilter })
    }

    this.filterByAlbum = (array) => {
      let filteredResults;
      if (this.state.isAlphabeticalFilter) {
        filteredResults = array.sort(function(a, b) {
            let textA = a.album.name.toUpperCase();
            let textB = b.album.name.toUpperCase();
            return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
        });
      } else {
        filteredResults = array.sort(function(a, b) {
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
            "Authorization": "Bearer BQCEYTm6R6AQj2iOpST6xRpiND1XCL5ii5XonHP0ZH0z30TaH7GHfscgmaUcZUUVoZOB7mKUHjea57gyNgyRE2CzbhX4rB6CGVgKmIrdxhDxwyVoCCCq7kVdmXk4CTzHfGLk7GUEzXSxqruREwHyWnLnbfkW-Cw"
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
      e.preventDefault();
      let searchQuery = e.target.value;
      this.setState({ searchQuery })
    }
  }
  render() {
    return (
      <div id="container">
        <div style={{boxShadow: "5px 8px #888888", borderRadius: 8, backgroundColor: '#424242', width: "80%", marginLeft: '10%', padding: 50, marginTop: "5%", marginBottom: '10%'}}>
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
