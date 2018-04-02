import React from "react";

const ResultsTable = (props) => {
  return (
    <div style={{marginTop: 50, backgroundColor: 'white'}}>
      <table class="table">
    <thead class="thead-light">
      <tr>
        <th onClick={()=>{ props.onClickTrack(props.items) }} scope="col">Song</th>
        <th onClick={()=>{ props.onClickArtist(props.items) }} scope="col">Artist</th>
        <th onClick={()=>{ props.onClickAlbum(props.items) }} scope="col">Album</th>
        <th scope="col">Preview</th>
      </tr>
    </thead>
    <tbody>

        {
          props.items.length ?
          props.items.map((ele) => {
            return (
              <tr>
                <td>{ele.name}</td>
                <td>{ele.artists[0].name}</td>
                <td>
                  <div>
                    <img style={{width: '50%', height: "50%"}} src={ele.album.images[1].url} />
                    <p style={{textAlign: 'left'}}>{ele.album.name}</p>
                  </div>
                </td>
                <a target="_blank" href={ele.preview_url}><td>Link</td></a>
              </tr>
            )
          })
          :
          <div class="alert alert-light" role="alert">
            Use the search bar to search for a song, artist or album!
          </div>
        }
    </tbody>
  </table>

    </div>
  )
}

export default ResultsTable;
