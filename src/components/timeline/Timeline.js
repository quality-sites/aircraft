import React, { Component } from 'react';
import './timeline.scss';

class Timeline extends Component {

  percentage(from, to){
    const size = from + to;
    return (size / 24) * 100;
  }

  render() {
    const greyStyle = {
      width: this.percentage(0, 7.3)+'%'
    };
    const greenStyle = {
      width: this.percentage(7.3, 9.15)+'%'
    };
    const purpleStyle = {
      width: this.percentage(0, 0)+'%'
    };
    return(
      <div className="timeline main__border">
          <div className="timeline__title">
            <div className="timeline__hour">0:00</div>
            <div className="timeline__hour">12.00</div>
          </div>
          <ul className="timeline__content timeline__grey timeline__full">
            <li className="full__height fl" style={greyStyle}>&nbsp;</li>
            <li className="timeline__green full__height fl" style={greenStyle}>&nbsp;</li>
            <li className="timeline__purple full__height fl" style={purpleStyle}>&nbsp;</li>
          </ul>
      </div>
    )
  }
}

export default Timeline;