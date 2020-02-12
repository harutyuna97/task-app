import React, { Component } from 'react';
import RegComponent from './components/register/RegComponent'
import LogComponent from './components/login/LogComponent';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Main from '../src/components/main/Main'
import Admin from './components/main/Admin';
import Quiz from './components/quiz/Quiz';
import QuizDashboard from './components/quiz/QuizDashboard';






class App extends Component {
  render() { 
    return ( 
      <BrowserRouter>
        <div className='App'> 
          <Switch>
            <Route exact path = '/' component={Main} />
            <Route exact path = '/dashboard' component = {QuizDashboard} />
            <Route exact path = '/admin/quiz' component={Quiz} />
            <Route exact path='/admin' component={Admin} />
            <Route path='/login' component={LogComponent} />
            <Route path='/register' component={RegComponent} />
          </Switch>
        </div>
      </BrowserRouter>
     );
  }
}
 
export default App;



