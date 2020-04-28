import React, { Component } from 'react';
import Header from './components/layout/Header';
import Content from './components/layout/Content';
import Footer from './components/layout/Footer';
import Mylist from './components/list/index';
import './App.css';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Header title="Stone Blue" />

        <Content>
          <p>
            Javascript React Development
          </p>
          <Mylist />
        </Content>

        <Footer
          copyright={`Stone Blue ${new Date().getFullYear()}`}
        />
      </div>
    );
  }
}

export default App;
