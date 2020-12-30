import React from "react";
import { Segment, Header } from "semantic-ui-react";
// import ProductForm from "../components/product-form";
import ProductTable from "../components/product-table";
// import { ProductContextProvider } from "../context/product-context";

export default function Products() {
  return (
    // <ProductContextProvider>
      <Segment basic>
        <Header as="h3">Products</Header>
        {/* <ProductForm /> */}
        <ProductTable />
      </Segment>
    // </ProductContextProvider>
  );
}