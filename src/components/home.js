import React from 'react';
import { Link  } from 'react-router-dom';


const Home = () => (
  <div>
   <h1>Welcome to City Tour Booking</h1>
          
          <div class="row">
            <div class="column">
            <Link to="/helsinki"><button><img src="./helsinki.jpg" alt="my image" />Helsinki</button></Link>
            
            </div>
            <div class="column">
            <Link to="/tampere"><button><img src="./tampere.jpg" alt="my image" /> Tampere</button></Link>
            </div>
            <div class="column">
            <Link to="/turku"><button><img src="./turku.jpg" alt="my image" /> Turku</button></Link>
            </div>
          </div>
            
          <div class="row">
            <div class="column">
            <Link to="/oulu"><button><img src="./oulu.jpg" alt="my image" /> Oulu</button></Link>
            </div>
            <div class="column">
            <Link to="/kuopio"><button><img src="./kuopio.jpg" alt="my image" /> Kuopio</button></Link>
            </div>
            <div class="column">
            <Link to="/joensuu"><button><img src="./joensuu.jpg" alt="my image" /> Joensuu</button></Link>
            </div>
          </div>
  </div>
);

export default Home;