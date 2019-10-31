import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from './components/Nav';
import AllTasks from './components/AllTasks';
import Show from './components/Show';
import New from './components/New';
import Update from './components/Update';

function App() {
  return (
    <Router>
      <div className="container">
        <Nav/>
        <h1 className="text-center">Task Master</h1>
        <Route path='/tasks' component={AllTasks}/>
        <Route path='/show' component={Show}/>
        <Route path='/new' component={New} />
        <Route path='/update' component={Update} />

      </div>
    </Router>
  );
}

export default App;
