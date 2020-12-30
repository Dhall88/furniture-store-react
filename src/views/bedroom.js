
import React, { useReducer, createContext, useEffect, useContext } from 'react'
import { Segment, Header } from "semantic-ui-react";
// import ProductForm from "../components/product-form";
import ProductTable from "../components/product-table";
import { Container, Row, Col, Jumbotron, Button } from 'react-bootstrap';
// import { ProductContextProvider, ProductContext } from "../context/product-context";
import Catagory from './catagory'
import bgimage from '../imgs/jumbotron-bedroom.jpg'


export default function Bedroom(products) {

  const jumboStyle = {
    position: 'relative',
    color: 'blue',
    backgroundImage: `url(${bgimage})`,
    height: '25em',
    backgroundSize: '100% 100%'
  };

  const divStyle = {
    position: 'relative',
    width: '10rem',
      marginLeft: '85%',
      marginTop: '13rem'
    // margin: 'auto'
  }


  return (
    <div>
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
    </div>
  );
}