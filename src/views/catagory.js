import React, { useState, useContext } from "react";
import { Segment, Header } from "semantic-ui-react";
// import ProductForm from "../components/product-form";
import ProductTable from "../components/product-table";
import { ProductContextProvider, ProductContext } from "../context/product-context";

export default function Catagory(props) {

  return (
    <ProductContextProvider>
      <Segment basic>
        <Header as="h3">{props.tag}</Header>
        {/* <ProductForm /> */}
        <ProductTable products={props.products} tag={props.tag}/>
      </Segment>
    </ProductContextProvider>
  );
}