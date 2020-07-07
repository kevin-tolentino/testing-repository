import React, {useState} from 'react';

export default function toggleSwitch (){
  const [isOn, setIsOn] = useState(false)

  const handleClick = (event) => {
    setIsOn(!isOn)
  }
    let toggleState = isOn;

    if (!toggleState) {
      return (
        <div className="background-container-off">
          <div className="switch-container">
            <div onClick={handleClick} className="switch-background-off">
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
            <div onClick={handleClick} className="switch-background-on">
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
