import React from 'react';
import '../app.css';

// Custom Component Imports
import TableRow from './TableRow.js';
import TableHeader from './TableHeader.js';

const ResultsTable = (props) => {
  return (
    <div id="results-table-container">
      <table className="table">
        <TableHeader
          onClickTrack={props.onClickTrack}
          onClickArtist={props.onClickArtist}
          onClickAlbum={props.onClickAlbum}
          items={props.items}
        />
        {
          props.items.length > 0 &&
          props.items.map((ele, i) => {
            return (
              <tbody key={i}>
                <TableRow
                  name={ele.name}
                  preview_url={ele.preview_url}
                  album={ele.album.name}
                  albumImage={ele.album.images[1].url}
                  artist={ele.artists[0].name}
                />
            </tbody>
            )
          })
        }
      </table>
      {
        props.items.length === 0 &&
        <div
          className="alert alert-light"
          role="alert"
        >
          Use the search bar to search by song, artiest or album!
        </div>
      }
    </div>
  )
}

export default ResultsTable;
