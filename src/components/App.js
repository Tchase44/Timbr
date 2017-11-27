import React, { Component } from 'react';
import Header from "./header.js"
import List from "./list.js"
import Footer from "./footer.js"
import "./styles/App.css"

class App extends Component {
  componentDidMount(){
    // possable api call here
  }
  render() {
    return (
      <div className="App">
        <Header className="App-header"></Header>
        <List />
        <Footer />
      </div>
    );
  }
}

export default App;
