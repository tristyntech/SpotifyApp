import React, { Component } from 'react';
import './app.css'

// Custom Component Imports
import AppBar from './Components/AppBar.js'
import TrackTable from './Components/TrackTable.js'

class App extends Component {
  constructor(){
    super();
    this.state = {
      results: {},
      filteredResults: [],
      searchQuery:'',
      height: 100
    }

    this.filterByTrack = (array) => {
      let filteredResults = array.sort(function(a, b) {
          let textA = a.name.toUpperCase();
          let textB = b.name.toUpperCase();
          return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
      });
      this.setState({ filteredResults })
    }

    this.filterByArtist = (array) => {
      let filteredResults = array.sort(function(a, b) {
        let textA = a.artists[0].name.toUpperCase();
        let textB = b.artists[0].name.toUpperCase();
        return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
      });
      this.setState({ filteredResults })
    }

    this.filterByAlbum = (array) => {
      let filteredResults = array.sort(function(a, b) {
          let textA = a.album.name.toUpperCase();
          let textB = b.album.name.toUpperCase();
          return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
      });
      this.setState({ filteredResults })
    }

    this.runSearch = () => {
      if (this.state.searchQuery.length) {
        console.log('running')
        const config = {
          headers: {
            "Authorization": "Bearer BQBEWS5qJ1Hw2sRWJ2chKfLtHVuAWwQ0T37Hyod2KpOpadBa84agzt_Z3ZjpCLxtUJhvkxUy8JujBkwpoZaOKnZJBBo0wB5mBHzLl9R1l6YXM3TvPQnXR_ejHNpcMyvqxupAAB2kF9353GQ6KCWPkCxHi7Iocd0"
          }
        }
        fetch('https://api.spotify.com/v1/search?q='+this.state.searchQuery+'&type=artist,track,album&limit=50', config)
        .then((results)=>{
          return results.json();
        })
        .then((results) => {
          this.setState({ results: results })
          this.setState({ filteredResults: results.tracks.items })
        })
        console.log('completed')
        console.log(this.state)
      }
    }

    this.updateQuery = (e) => {
      e.preventDefault();
      let searchQuery = e.target.value;
      this.setState({ searchQuery })
    }

  }

componentWillMount() {
  setTimeout(this.loadPage, 1000)
}

  render() {
    return (
      <div id="container">
        <div style={{boxShadow: "5px 8px #888888", borderRadius: 8, backgroundColor: '#424242', width: "80%", marginLeft: '10%', padding: 50, marginTop: "5%", marginBottom: '10%'}}>
          <AppBar
            onClick={this.runSearch.bind(this)}
            onChange={this.updateQuery.bind(this)}
          />
          <TrackTable
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
