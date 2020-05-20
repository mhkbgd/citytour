import React from 'react';
import './App.css';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        
      </header>
      <div className="App-body">
          <h1>Welcome to City Tour Booking</h1>

          <div class="row">
            <div class="column">
            <button><img src="./helsinki.jpg" alt="my image" />Helsinki</button>
            
            </div>
            <div class="column">
            <button><img src="./tampere.jpg" alt="my image" /> Tampere</button>
            </div>
            <div class="column">
            <button><img src="./turku.jpg" alt="my image" />Turku</button>
            </div>
          </div>
            
          <div class="row">
            <div class="column">
            <button><img src="./oulu.jpg" alt="my image" />Oulu</button>
            </div>
            <div class="column">
            <button><img src="./kuopio.jpg" alt="my image" />Kuopio</button>
            </div>
            <div class="column">
            <button><img src="./joensuu.jpg" alt="my image" />Joensuu</button>
            </div>
          </div>
            

          <script src="/__/firebase/7.14.4/firebase-app.js"></script>
          <script src="/__/firebase/7.14.4/firebase-analytics.js"></script>
          <script src="/__/firebase/init.js"></script>
      </div>
      
    </div>



  );
}

export default App;
