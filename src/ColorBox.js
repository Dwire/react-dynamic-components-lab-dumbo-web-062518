import React, { Component } from 'react';

export default class ColorBox extends Component {
  styleGuide = () => {
    return {opacity: this.props.opacity}
  }

  render() {
    console.log(this.props);
    return (
      <div className="color-box" style={this.styleGuide()}>
        {this.props.opacity >= 0.2 && <ColorBox opacity={this.props.opacity - 0.1}/> }
      </div>
    )
  }

}
