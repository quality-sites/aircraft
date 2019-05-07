import React, { Component } from 'react';
import './aircrafts.scss';
const { getData } = require('../../util');

class Aircrafts extends Component {

  constructor(props) {
    super(props);
    this.config = { 
      api : 'https://infinite-dawn-93085.herokuapp.com',
      aircraftsQuery : '/aircrafts',
      aircraftQuery : '/aircrafts/GABCD'   
    }
    this.loadAircraftsData(this.config.api, this.config.aircraftsQuery);
    this.state = {   
      "aircrafts": {"pagination":{"offset":0,"limit":25,"total":1},"data":[{"ident":"ABC","type":"A320","economySeats":186,"base":"EGKK"}]}
    }
  }

  loadAircraftsData (api, aircraftsQuery) { 
    getData(api, aircraftsQuery).then(data => {
      this.setState({"aircrafts":data.data});
    });
  }

  getAircraftData (api, aircraftQuery) { 
    getData(api, aircraftQuery).then(data => {
      // this.setState({ hits: data.data[0].hits, numberOfSlides, currentSlide });
    });
  }

  percentageCalulator(){
    return 100;
  }

  usage(value){
    if (value<50){
      return 'red';
    } else {
      return 'green';
    }
  }

  render() {
    return(
      <div className="aircrafts quarter full__height main__border fl">
        <h3 className="sub__title">Aircrafts</h3>
        <ul className="list">
          {this.state.aircrafts.data.map((main, index) => (
            <li key={index} className={this.usage(this.percentageCalulator())}>
              <div className="full">
                {main.ident}
              </div>
              <div className="full">
                {this.percentageCalulator()}%
              </div>
            </li>
          ))}
        </ul>

      </div>
    )
  }
}

export default Aircrafts;