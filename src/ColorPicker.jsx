import React from 'react';
import { ChromePicker } from 'react-color';
import { colors } from './colors';

import display from './assets/intro.jpg';
import logo from './assets/logo-acnh-en.png'

import './ColorPicker.css'

class ColorPicker extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      background: '#fff',
      current_index: null
    };
    this.findNearestColor = this.findNearestColor.bind(this);
    this.handleChangeComplete = this.handleChangeComplete.bind(this);
  }
  

  handleChangeComplete(color) {
    this.setState({ background: color.hex,
                    current_index: this.findNearestColor(color) });
    //console.log( "./" +colors[this.state.current_index].file_location)
  }

  findNearestColor(color) {
    let shortestDistance = null;
    let index = null;
    let i = 0;

    for(i=0; i<colors.length;i++) {
      let distance = Math.sqrt(
        Math.pow((color.rgb.r - colors[i].r), 2) +
        Math.pow((color.rgb.g - colors[i].g), 2) +
        Math.pow((color.rgb.b - colors[i].b), 2)
      );
      if(shortestDistance === null || distance < shortestDistance) {
        shortestDistance = distance;
        index = i;

        if(shortestDistance === 0) {
          break;
        }
      }
    }
    return index
  }

  renderValues() {
    return (
      <div className="values">
      <p><b>Hue:</b> {colors[this.state.current_index].hue}</p>
        <p><b>Vividness:</b> {colors[this.state.current_index].vividness}</p>
        <p><b>Brightness:</b> {colors[this.state.current_index].brightness}</p>
      </div>
    );
  }

  render() {
    return (
      <>
        <div className="title">
          <img src={logo} className="title-image" />
          <div className="title-text">
            COLOR PICKER TOOL
          </div>
        </div>
        <div className="main">
          <img src={this.state.current_index === null ? display : require("./" + colors[this.state.current_index].file_location)} className="display" />
          <div className="selector">
            Please select a color:
            <ChromePicker
              color={ this.state.background }
              onChangeComplete={ this.handleChangeComplete }
            />
            {this.state.current_index === null ? '' : this.renderValues()}
          </div>
        </div>
      </>
    );
  }
}

export default ColorPicker;