import React from 'react';
import '../app.css';

const AppBar = (props) => {
  return (
    <div>
      <img
        alt="logo"
        src="https://davedomina.com/wp-content/uploads/2014/06/icon-farm.png"
      />
      <h1
        id="app-title"
      >SongFarm
      </h1>
        <div
          id="search-container"
        >
          <input
            onChange={props.onChange}
            id="search-input"
            type="text"
          />
          <button
            id="search-button"
            type="submit"
            onClick={props.onClick}
          >
            Search
          </button>
      </div>
    </div>
  )
}
export default AppBar
