import React, { Component } from 'react';
// import axios from 'axios'
import Header from "./header.js"
import List from "./list.js"
import Footer from "./footer.js"
import "../styles/App.css"

class App extends Component {

  render() {
    return (
      <div className="App">
        <Header className="App-header"></Header>
        <List />
        <Footer className="App-footer"/>
      </div>
    );
  }
}

export default App;
