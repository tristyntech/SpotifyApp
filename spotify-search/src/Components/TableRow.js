import React from 'react';

const TableRow = (props) => {
  return (
    <tr>
      <td className="song">
        <a
          target="_blank"
          href={props.preview_url}
          >
          {props.name}
        </a>
      </td>
      <td>
        {props.artist}
      </td>
      <td
        className="test"
      >
        <div>
          <img
            alt={props.album}
            id="album-art"
            src={props.albumImage}
          />
          <p
            id="album-title"
          >
            {props.album}
          </p>
        </div>
      </td>
    </tr>
  )
}

export default TableRow;
