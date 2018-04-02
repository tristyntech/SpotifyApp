import React, { Component } from 'react';
import './app.css'

class App extends Component {
  constructor(){
    super();
    this.state = {

    }
    this.runSearch = () => {
      console.log('running')
      const config = {
        headers: {
          "Authorization": "Bearer " + "BQB6GlldBP0LhenlfhphoHqYvFnhLb79P3Ih8E0yPhjgB0T21Ioxqwju0t3da4cUfmDt7YB6cq6UZw3wPiwhvk9n39OivmhZ8yUiy0Jy0lO3UnX57W5ZY0WRSzm78TQ45MbX55vfYBArWZAGxkAWzUSzy0_3XRQ"
        }
      }
      fetch('https://api.spotify.com/v1/search?q=avenged&type=artist,track,album', config)
      .then((results)=>{
        return results.json();
      })
      .then((results) => {
        console.log(results)
      })
      console.log('completed')
    }
  }
  render() {
    return (
      <div id="container" style={{height: 80, width: "100%", backgroundColor: 'blue'}}>

        <div id='header-container'>
          <div id='header'>

            <div id="title-container">
              <h1>Song Farm</h1>
            </div>

            <div id="search-container">
              <h2>Search By:</h2>
              <select>
                <option value="volvo">Volvo</option>
                <option value="saab">Saab</option>
                <option value="opel">Opel</option>
                <option value="audi">Audi</option>
              </select>
              <input  />
              <button>Search</button>
            </div>

          </div>
        </div>

      </div>
    );
  }
}

export default App;
