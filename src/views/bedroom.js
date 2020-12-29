
import React, { useReducer, createContext, useEffect, useContext } from 'react'
import { Segment, Header } from "semantic-ui-react";
// import ProductForm from "../components/product-form";
import ProductTable from "../components/product-table";
import { Container, Row, Col, Jumbotron, Button } from 'react-bootstrap';
// import { ProductContextProvider, ProductContext } from "../context/product-context";
import Catagory from './catagory'


export default function Bedroom(products) {

  const divStyle = {
    color: 'blue',
    backgroundImage: 'url(../imgs/jumbotron-bedroom.jpg)',
  };

  return (
    <div>
          <Jumbotron fluid>
      <h1>Bedroom</h1>
      <p>
        This is a simple hero unit, a simple jumbotron-style component for calling
        extra attention to featured content or information.
      </p>
      <p>
    <Button variant="primary">Learn more</Button>
  </p>
</Jumbotron>

      <Catagory products={products} tag='bedroom'/>
    </div>
  );
}