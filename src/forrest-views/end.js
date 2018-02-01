import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './start.css';

class End extends Component {
  constructor() {
    super();
    this.state = {
      url: [`/`, `/p1`, `/p1`, `../`]
    }
  }
  render() {
    return(
      <div class="container finalContainer">

        <div class="row align-items-end row1">
          <div class="col col1">
            <Link className="L1" to={this.state.url[0]}>Congratulations</Link>
          </div>
        </div>

        <div class="row align-items-center row2">
          <div class="col col2">
            <Link className="L2" to={this.state.url[1]}>Left</Link>
            <Link className="L3" to={this.state.url[2]}>Right</Link>
          </div>
        </div>

        <div class="row align-items-end row3">
          <div class="col col3">
            <Link className="LB" to={this.state.url[3]}>To Back:</Link>
          </div>
        </div>

      </div>
    ) // end return
  } // end render
}

export default End;
