import React, { Component } from 'react';

import NavBar from './views/navbar'
import Header from './views/header'
import ContentA from './views/content/contentA'
import ContentB from './views/content/contentB'
import ContentC from './views/content/contentC'
import Banner from './views/banner'
import Footer from './views/footer'

import './App.scss';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar/>
        <Header/>
        <ContentA/>
        <ContentB/>
        <ContentC/>
        <Banner/>
        <Footer/>
      </div>
    );
  }
}

export default App;
