import React from 'react';
import{Switch, Route} from 'react-router-dom';
import Start from '../forrest-views/start';
import Correct1 from '../forrest-views/c1';
import Correct2 from '../forrest-views/c2';

export default (
  <Switch>
    <Route exact path='/' component={Start}/>
    <Route path='/c1' component={Correct1}/>
    <Route path='/c2' component={Correct2}/>
  </Switch>
)
