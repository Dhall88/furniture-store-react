import React from 'react'
import { Jumbotron, Button } from 'react-bootstrap';
import Catagory from './catagory'
const link = process.env.PUBLIC_URL



export default function Bedroom(products) {

  const jumboStyle = {
    position: 'relative',
    color: 'blue',
    backgroundImage: `url(${link}/assets/imgs/jumbotron-bedroom.jpg)`,
    height: '25em',
    backgroundSize: '100% 100%'
  };

  const divStyle = {
    width: '10rem',
      marginLeft: '85%',
      marginTop: '13rem'
  }


  return (
    <React.Fragment>
          <Jumbotron style={jumboStyle} fluid>
              <h1>Bedroom</h1>
              <div style={divStyle}>
                <p>
                  Get started with some design ideas.
                </p>
                <p>
                  <Button variant="primary">Learn more</Button>
                </p>
              </div>
          </Jumbotron>

      <Catagory products={products} tag='bedroom'/>

    </React.Fragment>
  );
}