//In your PlayListForm component you should have a addToList function that happens
//when the form is submitted.
//This expression or method (dependin on the syntax you choose) will be comparable to this:

import React, { Component } from 'react';

export default class PlayListForm extends Component {
  constructor(props){
    super(props);

    this.state = {
      userName: "",
      songArtist: "",
      songTitle:"",
      SongNotes: ""
    };

    this.handleUserChange = this.handleUserChange.bind(this);
    this.handleArtistChange = this.handleArtistChange.bind(this);
    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.handleNotesChange = this.handleNotesChange.bind(this);
    this.addToList = this.addToList.bind(this);


  }

   handleUserChange(e) {
      e.preventDefault();
      this.setState({
        userName: e.target.value
      });
    }

    handleArtistChange(e) {
       e.preventDefault();
       this.setState({
         songArtist: e.target.value
       });
     }


     handleTitleChange(e) {
        e.preventDefault();
        this.setState({
          songTitle: e.target.value
        });
      }

      handleNotesChange(e) {
         e.preventDefault();
         this.setState({
           songNotes: e.target.value
         });
       }

      addToList = (e) => {
          e.preventDefault();
          this.setState({
            userName: e.target.value,
            songTitle: e.target.value,
            songArtist: e.target.value,
            songNotes: e.target.value
          });
          let listItem = JSON.stringify(this.state);
          console.log(listItem);
          fetch("https://tiny-lasagna-server.herokuapp.com/collections/playlisting", {
            method: "POST",
            body: listItem,
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
          }
        }
        ).then(response => {
          console.log(response, "yay");

        }).catch(err => {
          console.log(err, "boo!");
        });
        this.setState({userName: '', songNotes: '', songArtist: '', songTitle:''});
      }


render() {
  return (
    <div>
    <form onSubmit={this.addToList}>
    <div >
    <div className= "form-group">
    <label className="form-control-label" for="username">User Name: </label>
    <input name="username" type="text" className="form-control" placeholder="Enter your User Name"
     onChange={this.handleUserChange} value={this.state.userName}/>
    <br></br>
    </div>
    <div className= "form-group">
    <label className="form-control-label" for="artist">Artist/Band: </label>
    <input name="artist" type="text"className="form-control" placeholder="Artist Name"
     onChange={this.handleArtistChange} value={this.state.songArtist}/>
     <br></br>
     </div>
     <div className= "form-group">
     <label className="form-control-label"for="title">Song Title: </label>
    <input name="title" type="text" id="title" className="form-control" placeholder="Song Title"
     onChange={this.handleTitleChange} value={this.state.songTitle}/>
     <br></br>
     </div>
     <div className= "form-group">
     <label className="form-control-label" for="notes">Song Notes: </label>
    <textarea rows="4" cols="50" className="form-control" name="notes" type="text" placeholder="Notes"  onChange={this.handleNotesChange} value={this.state.songNotes}></textarea>
    <br></br>
    </div>
    <button className="btn btn-info" type="submit">Add Song</button>
    </div>
    </form>
    </div>
  )
}
}
