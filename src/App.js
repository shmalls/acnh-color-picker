import React from 'react';
import './App.css';
import ColorPicker from './ColorPicker'
import Footer from './Footer'
import display from './assets/intro.jpg';
import logo from './assets/logo-acnh-en.png'


function App() {
  return (
    <div className="App">
      <ColorPicker />
      <Footer />
    </div>
  );
}

export default App;
