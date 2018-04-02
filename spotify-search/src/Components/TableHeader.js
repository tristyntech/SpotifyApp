import React from "react";
import '../app.css';

const TableHeader = (props) => {
  return (
    <thead className="thead-light">
      <tr>
        <th
          onClick={()=>{ props.onClickTrack(props.items) }}
          scope="col">Song</th>
        <th
          onClick={()=>{ props.onClickArtist(props.items) }}
          scope="col"
          className="test" >Artist</th>
        <th
          onClick={()=>{ props.onClickAlbum(props.items) }}
          scope="col">Album</th>
      </tr>
    </thead>
  )
}

export default TableHeader
