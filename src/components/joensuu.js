import React from 'react';
import { Link  } from 'react-router-dom';

const Joensuu = () => (
  <div>
    <h2>Joensuu</h2>
    <img src="./joensuu.jpg" alt="my image" />
    <p>
    Joensuu is a city and municipality in North Karelia. It was founded in 1848. The population of Joensuu is 76,543 (January 31, 2019), and the economic region of Joensuu has a population of 115,000.As is typical of cities in Eastern Finland, Joensuu is monolingually Finnish.

Joensuu is a lively student city with a subsidiary of the University of Eastern Finland, which has over 15,000 enrolled students, and a further 4,000 students at the Karelia University of Applied Sciences.</p>
    <h3>Placees Included in The Tour</h3>
    <dl>
      <dt>Koli National Park</dt>
      <dt>Botania</dt>
      <dt>North Cerelia Meseum</dt>
      <dt>Joensuu Church</dt>
      <dt>Joensuu Market Square</dt>
  </dl> 
  <Link to="/home"><button>Back</button></Link>
  <Link to="/book"><button>Book</button></Link>
  </div>
);

export default Joensuu;