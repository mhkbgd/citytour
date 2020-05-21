import React from 'react';
import { Link  } from 'react-router-dom';

const Oulu = () => (
  <div>
    <h2>Oulu</h2>
    <img src="./oulu.jpg" alt="my image" />
    <p>
    Oulu is a city and municipality of 208 939 inhabitants (31 January 2019) in the region of North Ostrobothnia, Finland. It is the most populous city in Northern Finland, and the fifth most populous in the country. Only the city of Murmansk, Russia, has more people and is further north.
Oulu is considered one of Europe's "living labs", where residents experiment with new technology (such as NFC tags and ubi-screens) on a community-wide scale.</p>
    <h3>Placees Included in The Tour</h3>
    <dl>
      <dt>Teitomaa Science center</dt>
      <dt>Nallikari</dt>
      <dt>The Oulu Museum of Art</dt>
      <dt>Oulujoki</dt>
      <dt>Hupisaaret Islands</dt>
  </dl> 
  <Link to="/home"><button>Back</button></Link>
  <Link to="/book"><button>Book</button></Link>
  </div>
);

export default Oulu;