import React, { Component } from 'react';
import Header from "./header.js"
import List from "./list.js"

class App extends Component {
  componentWillMount(){}
  // render
  componentDidMount(){}
  render() {
    return (
      <div className="App">
        <Header className="App-header"></Header>
        <List />
      </div>
    );
  }
}

export default App;
