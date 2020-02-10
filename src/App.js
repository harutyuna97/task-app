import React, { Component } from 'react';
import RegComponent from './components/register/RegComponent'
import LogComponent from './components/login/LogComponent';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Main from '../src/components/main/Main'






class App extends Component {
  render() { 
    return ( 
      <BrowserRouter>
        <div className='App'> 
          <Main />
          <Switch>
            <Route path='/login' component={LogComponent} />
            <Route path='/register' component={RegComponent} />
          </Switch>
        </div>
      </BrowserRouter>
     );
  }
}
 
export default App;



