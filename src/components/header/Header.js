import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import logo from '../../assets/images/logo.png';
import './header.scss';

class Header extends Component {

  constructor(props) {
    super(props);
	
    this.state = {
      startDate: new Date()
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(date) {
    this.setState({
      startDate: date
    });
  }

  render() {
    return (
      <header className="header display--flex">
      	<div className="header__company full">
	        <img src={logo} className="header__logo center" alt="logo" />
	        <h2 className="header__title">Welcome to Flight Search Engine</h2>
          <div className="departure__date center">
              <DatePicker
                selected={this.state.startDate}
                onChange={this.handleChange} />
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
