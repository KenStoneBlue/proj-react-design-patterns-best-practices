import React, { Component } from 'react';
import Header from './components/layout/Header';
import Content from './components/layout/Content';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header title="Stone Blue" />

        <Content>
          <p>
            This is our <strong>&lt;Content /&gt;</strong> component
          </p>
        </Content>

      </div>
    );
  }
}

export default App;
