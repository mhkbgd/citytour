import React from 'react';
import { Link  } from 'react-router-dom';

const Tampere = () => (
  <div>
    <h2>Tampere</h2>
    <img src="./tampere.jpg" alt="my image" />
    <p>
    Tampere is a city in Pirkanmaa, southern Finland. It is the most populous inland city in the Nordic countries.
  Tampere has a population of 238,140 with the urban area holding 334,112 people and the metropolitan area, also known as the Tampere sub-region, holding 385,301 inhabitants in an area of 4,970 km2. Tampere is the second-largest urban area and third most-populous individual municipality in Finland, after the cities of Helsinki and Espoo and the most populous Finnish city outside the Greater Helsinki area, within which both Helsinki and Espoo are both located. Tampere is the major urban, economic, and cultural hub for central Finland</p>
    <h3>Placees Included in The Tour</h3>
    <dl>
      <dt>Sarkanniemi</dt>
      <dt>Nasinneula Observation Tower</dt>
      <dt>Tampere Cathedral</dt>
      <dt>Pyynikki Observation Tower</dt>
      <dt>Moomin Museum</dt>
  </dl> 
  <Link to="/home"><button>Back</button></Link>
  <Link to="/book"><button>Book</button></Link>
  </div>
);

export default Tampere;