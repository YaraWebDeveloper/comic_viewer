/*
  React Ethereal - 2018

  Main Content APP
*/

import React from 'react';
import {Route, Switch} from 'react-router';

/* run welcome */
import Comic from './comic/Comic.react';

class App extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <Switch>
        <Route path="/" component={Comic}/>
      </Switch>
    )
  }
}

/* default export */
export default App;
