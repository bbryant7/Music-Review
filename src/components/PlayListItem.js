
import React, { Component } from 'react';

export default class PlayListItem extends Component {
  render() {
    let songs = this.props.arrayOfSongs.map((song, index) =>{
        return (
          <div key={index} className="card w-100">
            <div className="card-body">
              <br></br>
              <h4 className="card-title">{song.songTitle}</h4>
              <p>Artist/Band: {song.songArtist} </p>
              <p>Notes: {song.Notes} </p>
              <p>User: {song.userName}</p>
            </div>
          </div>
        );
    });
    return (
      <div>
      {songs}
    </div>

    )
  }
}
