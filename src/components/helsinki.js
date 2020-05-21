import React from 'react';
import { Link  } from 'react-router-dom';

const Helsinki = () => (
  <div>
    <h2>Helsinki</h2>
    <img src="./helsinki.jpg" alt="my image" />
    <p>
    Helsinki is the capital and most populous city of Finland. Located on the shore of the Gulf of Finland, it is the seat of the region of Uusimaa in southern Finland, and has a population of 650,058.The city's urban area has a population of 1,268,296, making it by far the most populous urban area in Finland as well as the country's most important center for politics, education, finance, culture, and research. Helsinki is located 80 kilometres (50 mi) north of Tallinn, Estonia, 400 km (250 mi) east of Stockholm, Sweden, and 300 km (190 mi) west of Saint Petersburg, Russia. It has close historical ties with these three cities.
    </p>
    <h3>Placees Included in The Tour</h3>
    <dl>
      <dt>Suomelinna</dt>
      <dt>Hesinki Cathedral</dt>
      <dt>Market Square</dt>
      <dt>Temppeliakion Church</dt>
      <dt>Hesinki Cathedral</dt>
  </dl> 
  <Link to="/home"><button>Back</button></Link>
  <Link to="/book"><button>Book</button></Link>
  </div>
);

export default Helsinki;