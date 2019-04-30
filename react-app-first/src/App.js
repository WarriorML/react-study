import React, { Component } from 'react';
import './App.css';
// import Header from './component/Header'
import CommentApp from './component/CommentApp'
class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <Header /> */}
        <CommentApp></CommentApp>
      </div>
    );
  }
}

export default App;
