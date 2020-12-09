import React from "react";
import { Segment, Header } from "semantic-ui-react";
// import ProductForm from "../components/product-form";
import ProductTable from "../components/product-table";
import { ProductContextProvider } from "../context/product-context";

export default function LivingRoom() {
  return (
    <ProductContextProvider>
      <Segment basic>
        <Header as="h3">Living Room</Header>
        {/* <ProductForm /> */}
        <ProductTable tag="living-room"/>
      </Segment>
    </ProductContextProvider>
  );
}