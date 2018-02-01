import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './start.css';

class Penalty1 extends Component {
  constructor() {
    super();
    this.state = {

    }
  } //constructor end

  // skull kid is a monster battle where the size of skull kid grows at .5 second intervels at 10% growth from 50% to 100%.  If you throw rocks, skull kid shrinks at 8% per rock thrown with a .3 second reset for the Throw Rocks button.  If skull kid size drops below 50% the Run Away button appears letting you leave the penalty view.  If skull kid reaches 110% size, maybe game over, maybe do nothing (havn't decided yet). 
  skullKid() {
    console.log('skull kid is here');
  }

  render() {
    return (
      <div>
        <h1>Wrong Way, Now face the Danger!</h1>
        <div class="container penalty-container">
          <img
            alt="skull kid"
            className="skull-kid"
            src={require('../images/skull-kid.png')}/>
          <div class="row">
            <button onClick={console.log('rock thrown!')}>Throw Rocks!</button>
            <Link className="LB" to={`/`}>Run Away!</Link>
          </div>
        </div>
      </div>
    ) // end of return
  } // end of render
}

export default Penalty1;
