import React from "react";
import { Segment, Header } from "semantic-ui-react";
// import ProductForm from "../components/product-form";
import ProductTable from "../components/product-table";
import { ProductContextProvider } from "../context/product-context";

export default function Bedroom() {
  return (
    <ProductContextProvider>
      <Segment basic>
        <Header as="h3">Bedroom</Header>
        {/* <ProductForm /> */}
        <ProductTable tag="bedroom"/>
      </Segment>
    </ProductContextProvider>
  );
}