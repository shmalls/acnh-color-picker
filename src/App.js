import React from 'react';
import './css/App.css';
import ColorPicker from './ColorPicker'
import Footer from './Footer'
import logo from './assets/logo-acnh-en.png'


function App() {
  return (
    <div className="App">
      <div className="title">
         <img src={logo} className="title-image" />
         <div className="title-text">
           COLOR PICKER TOOL
          </div>
        </div>
      <ColorPicker />
      <Footer />
    </div>
  );
}

export default App;
