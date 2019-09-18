import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import Navigation from './Conponentes/Navigation'
import CreateNote from './Conponentes/CreateNote'
import NotesList from './Conponentes/NoteList'
import CreateUser from './Conponentes/CreateUser'
function App() {
  return (
    <Router>
      <Navigation />
      <div className="container p-4">
        <Route path='/' exact component={NotesList} />
        <Route path='/edit/:id' component={CreateNote} />
        <Route path='/create' component={CreateNote} />
        <Route path='/user' component={CreateUser} />
      </div>
    </Router>

  );
}

export default App;
