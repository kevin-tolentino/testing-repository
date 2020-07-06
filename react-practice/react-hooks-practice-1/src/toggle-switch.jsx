import React from 'react';

export default class toggleSwitch extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isOn: false };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(state => ({
      isOn: !state.isOn
    }));
  }

  render() {
    const toggleState = this.state.isOn;
    if (!toggleState) {
      return (
        <div className="background-container-off">
          <div className="switch-container">
            <div onClick={this.handleClick} className="switch-background-off">
              <div className="toggle-switch-off"></div>
            </div>
            <div className="toggle-text">
          Off
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div className ='background-container-on'>
          <div className="switch-container">
            <div onClick={this.handleClick} className="switch-background-on">
              <div className="toggle-switch-on"></div>
            </div>
            <div className="toggle-text">
          On
            </div>
          </div>
        </div>
      );
    }
  }
}
