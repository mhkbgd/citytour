import React from 'react';
import './App.css';
import {
  Route,
  Switch,
  Redirect
} from 'react-router-dom';


import Home from './components/home';
import Helsinki from './components/helsinki';
import Tampere from './components/tampere';
import Turku from './components/turku';
import Oulu from './components/oulu';
import Kuopio from './components/kuopio';
import Joensuu from './components/joensuu';
import Book from './components/book';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        
      </header>
      <div className="App-body">
          
    

          <Switch>
            <Route exact path="/"  component={Home} />
            <Route path="/helsinki" component={Helsinki} />
            <Route path="/tampere" component={Tampere} />
            <Route path="/turku" component={Turku} />
            <Route path="/oulu" component={Oulu} />
            <Route path="/kuopio" component={Kuopio} />
            <Route path="/joensuu" component={Joensuu} />
            <Route path="/book" component={Book} />
            <Redirect to="/" />
          </Switch>

          <script src="/__/firebase/7.14.4/firebase-app.js"></script>
          <script src="/__/firebase/7.14.4/firebase-analytics.js"></script>
          <script src="/__/firebase/init.js"></script>
      </div>

      <footer>
        <address>
          Postal Address: Ida Aalbergin Tie 1 A, Helsinki, Finland, 00400.
        </address>
        <p>Copyright © 2020 All rights reserved.</p>
      </footer>
      
    </div>



  );
}


export default App;
