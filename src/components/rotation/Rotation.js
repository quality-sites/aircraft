import React, { Component } from 'react';
import Timeline from '../timeline/Timeline';
import 'react-datepicker/dist/react-datepicker.css';
import './rotation.scss';
const { getData } = require('../../util');

class Rotation extends Component {

  constructor(props) {
    super(props);
    this.config = { 
      api : 'https://infinite-dawn-93085.herokuapp.com',
      flightQuery : '/flights/AS1234'    
    }
    this.getFlightData(this.config.api, this.config.flightQuery);
    this.state = {
      "edit": false,   
      "rotation": {"data":{"id":"MAN1234","departuretime":27000,"arrivaltime":33300,"readable_departure":"07:30","readable_arrival":"09:15","origin":"LHBP","destination":"LFSB"}}
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  getFlightData (api, flightQuery) { 
    getData(api, flightQuery).then(data => {
      this.setState({ "rotation": data.data });
    });
  }

  handleSubmit(e) {
    if (this.from_time.value && this.to_time.value){
      this.setState({ "rotation": { "data": {"readable_departure": this.from_time.value, "readable_arrival": this.to_time.value }}});
    }
    e.preventDefault();
  }

  editAircraft(){
    this.setState({ "edit": true });
  }

  closeAircraft(){
    this.setState({ "edit": false });
  }

  render() {
    return(
      <div className="rotation main__border half full__height fl">
        <h3 className="sub__title">Rotation - {this.state.rotation.data.id}</h3>
        <h4>Click on rotation below to edit.</h4>
        <div className={(this.state.edit) ? 'show':'hide'}>
          <form onSubmit={this.handleSubmit}>
            <label className="full fl">
              From: {this.state.rotation.data.origin}
            </label>
            <label className="full fl">
              Time: <input type="text" ref={(from_time) => this.from_time = from_time} placeholder={this.state.rotation.data.readable_departure} />
            </label>
            <label className="full fl">
              To: {this.state.rotation.data.destination}
            </label>
            <label className="full fl">
              Time: <input type="text" ref={(to_time) => this.to_time = to_time} placeholder={this.state.rotation.data.readable_arrival} />
            </label>
            <input type="submit" value="Submit" />
            <div className="close__button" onClick={() => this.closeAircraft()}>Close [X]</div>
          </form>
        </div>
        <ul className="list">
          <li onClick={() => this.editAircraft()}>
            <div className="flight__title">
              Flight: {this.state.rotation.data.origin}
            </div>
            <div className="flight__info">
              <div className="flight__info--from">
                <div className="full">{this.state.rotation.data.origin}</div>
                <div className="full">{this.state.rotation.data.readable_departure}</div>
              </div>
              <div className="flight__info--arrow">
                <img alt="Arrow" src='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgdmlld0JveD0iMCAwIDMyIDMyIj48cGF0aCBkPSJNNS45NzUgMTcuNTA0bDE0LjI4Ny4wMDEtNi4zNjcgNi4zNjZMMTYuMDIxIDI2bDEwLjAwNC0xMC4wMDNMMTYuMDI5IDZsLTIuMTI4IDIuMTI5IDYuMzY3IDYuMzY2SDUuOTc3eiIvPjwvc3ZnPg=='/>
              </div>
              <div className="flight__info--to">
                <div className="full">{this.state.rotation.data.destination}</div>
                <div className="full">{this.state.rotation.data.readable_arrival}</div>
              </div>
            </div>
          </li>
        </ul>
        <Timeline rotation={this.state.rotation}></Timeline>
      </div>
    )
  }
}

export default Rotation;