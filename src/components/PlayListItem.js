
import React, { Component } from 'react';

export default class PlayListItem extends Component {
  render() {
    let songs = this.props.arrayOfSongs.map((song, index) =>{
        return (
          <div key={index}>
                    <p>User: {song.userName}</p>
                    <p>Artist/Band: {song.songArtist} </p>
                    <p>Title: {song.songTitle} </p>
                    <p>Notes: {song.Notes} </p>

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
