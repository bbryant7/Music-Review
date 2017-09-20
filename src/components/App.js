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
        <div >
          <h2>Music Reviews</h2>
        </div>
        <PlayListForm/>
        <PlayList/>

      </div>
    );
  }
}

export default App;
