import React from 'react';
import{Switch, Route} from 'react-router-dom';
import Start from '../forrest-views/start';
import Correct1 from '../forrest-views/c1';
import Correct2 from '../forrest-views/c2';
import Correct3 from '../forrest-views/c3';
import Correct4 from '../forrest-views/c4';
import Correct5 from '../forrest-views/c5';
import Correct6 from '../forrest-views/c6';
import End from '../forrest-views/end';
import Penalty1 from '../forrest-views/p1';

export default (
  <Switch>
    <Route exact path='/' component={Start}/>
    <Route path='/c1' component={Correct1}/>
    <Route path='/c2' component={Correct2}/>
    <Route path='/c3' component={Correct3}/>
    <Route path='/c4' component={Correct4}/>
    <Route path='/c5' component={Correct5}/>
    <Route path='/c6' component={Correct6}/>
    <Route path='/end' component={End}/>
    <Route path='/p1' component={Penalty1}/>
  </Switch>
)
