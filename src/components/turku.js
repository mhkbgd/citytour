import React from 'react';
import { Link  } from 'react-router-dom';

const Turku = () => (
  <div>
    <h2>Turku</h2>
    <img src="./turku.jpg" alt="my image" />
    <p>
    Turku is a city on the southwest coast of Finland at the mouth of the Aura River, in the region of Finland Proper (Varsinais-Suomi). The region was originally called Suomi (Finland), which later became the name for the whole country.
It is unknown when Turku gained city rights. The Pope first mentioned the town Aboa in his Bulla in 1229 and the year is now used as the foundation year of the city.</p>
    <h3>Placees Included in The Tour</h3>
    <dl>
      <dt>Turku Castle</dt>
      <dt>Moomin World</dt>
      <dt>Turku Cathedral</dt>
      <dt>Turku Art Meseum</dt>
      <dt>Forum Marinum</dt>
  </dl> 
  <Link to="/home"><button>Back</button></Link>
  <Link to="/book"><button>Book</button></Link>
  </div>
);

export default Turku;