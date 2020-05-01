import React, { Component } from 'react';
import Header from './components/layout/Header';
import Content from './components/layout/Content';
import Footer from './components/layout/Footer';
import Mylist from './components/list/index';
import Geolocation from './components/geolocation/Geolocation';
import './App.css';

const some_list = [
  {'excerpt': 'the excerpt whatever', 'title': 'the title ofit'},
  {'excerpt': 'the excerpt whatever', 'title': 'the title ofit'},
  {'excerpt': 'the excerpt whatever', 'title': 'the title ofit'},
  {'excerpt': 'the excerpt whatever', 'title': 'the title ofit'},
  {'excerpt': 'the excerpt whatever', 'title': 'the title ofit'},
  {'excerpt': 'the excerpt whatever', 'title': 'the title ofit'},
];


class App extends Component {
  render() {
    return (
      <div className="App">
        <Header title="Stone Blue" />

        <Content>
          <p>
            Javascript React Development
          </p>
          <Geolocation />
          <Mylist some_list={some_list} />
        </Content>

        <Footer
          copyright={`Stone Blue ${new Date().getFullYear()}`}
        />
      </div>
    );
  }
}

export default App;
