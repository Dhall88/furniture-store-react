
import React, { useState, useContext } from "react";
import { Segment, Header } from "semantic-ui-react";
// import ProductForm from "../components/product-form";
import ProductTable from "../components/product-table";
import { ProductContextProvider, ProductContext } from "../context/product-context";

export default function Home() {

  // console.log(useContext(ProductContext));
let test;



  return (
    <ProductContextProvider>
      <Segment basic>
        <Header as="h3">Home</Header>
        {/* <ProductForm /> */}
        <ProductTable tag="bedroom"/>
      </Segment>
    </ProductContextProvider>
  );
}