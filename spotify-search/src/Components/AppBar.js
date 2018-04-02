import React, { Component } from 'react';

const AppBar = (props) => {
  return (
    <div>
      <h1 style={{fontFamily: "Simonetta", color: 'white'}}>SongFarm</h1>

        <div style={{padding: 5, height: 25}}>
          <input onChange={props.onChange} style={{fontFamily: "Ubuntu Mono", paddingLeft: 5, color: 'grey', fontSize: "1.1em", height: 35, border: '1.5px solid white', borderRadius: "3px 0px 0px 3px", float: 'left'}} />
          <button onClick={props.onClick} style={{color: 'white', float: 'left', height: 35, border: 0, borderLeft: "1px solid #888", borderRadius: "0px 3px 3px 0px", backgroundColor: '#c6c6c6', marginLeft: 0}}>Search</button>
      </div>
    </div>
  )
}
export default AppBar
