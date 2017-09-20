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
    <input name="username" type="text" placeholder="Enter your UserName"
     onChange={this.handleUserChange} value={this.state.userName}/>

    <input name="artist" type="text" placeholder="Artist Name"
     onChange={this.handleArtistChange} value={this.state.songArtist}/>

    <input name="title" type="text" placeholder="Song Title"
     onChange={this.handleTitleChange} value={this.state.songTitle}/>

    <textarea rows="4" cols="50" name="notes" type="text" placeholder="Notes"  onChange={this.handleNotesChange} value={this.state.songNotes}></textarea>

    <button type="submit">Submit</button>
    </form>
    </div>
  )
}
}
