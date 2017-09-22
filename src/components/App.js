import React, { Component } from 'react';
import '../styles/App.css';
import PlayList from './PlayList.js';
import PlayListForm from './PlayListForm.js';
import NavBar from './NavBar.js';

class App extends Component {
  render() {
    return (
      <div className="App">
       <NavBar/>
       <div className="d-flex justify-content-around">
       <PlayListForm/>
       <PlayList/>
       </div>
      </div>
    );
  }
}

export default App;
