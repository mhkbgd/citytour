import React from 'react';
import { Link  } from 'react-router-dom';

const Kuopio = () => (
  <div>
    <h2>Kuopio</h2>
    <img src="./kuopio.jpg" alt="my image" />
    <p>
    Kuopio is a Finnish city and municipality located in the region of Northern Savonia (Pohjois-Savo). It has a population of 118,667, which makes it the ninth-most populous city in Finland and the most populous city in Eastern Finland Province. Kuopio has a total area of 4,326.35 square kilometres (1,670.41 sq mi), of which 719.85 km2 (277.94 sq mi) is water and half is forest. Though the city's population is a spread-out 74/km2 (190/sq mi), the city's urban areas are populated comparably densely (urban area: 1,618 /km²), making Kuopio Finland's second-most densely populated city.</p>
    <h3>Placees Included in The Tour</h3>
    <dl>
      <dt>Tahko</dt>
      <dt>Puijo Tower</dt>
      <dt>Puijo</dt>
      <dt>Kuopio Market</dt>
      <dt>Kuopio Cathedral</dt>
  </dl> 
  <Link to="/home"><button>Back</button></Link>
  <Link to="/book"><button>Book</button></Link>
  </div>
);

export default Kuopio;