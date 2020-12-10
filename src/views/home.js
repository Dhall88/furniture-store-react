import React from "react";
import { Segment, Header } from "semantic-ui-react";
// import ProductForm from "../components/product-form";
import ProductTable from "../components/product-table";
import { ProductContextProvider } from "../context/product-context";

// fetch('http://localhost:3000/products')
//   .then(
//     function(response) {
//       if (response.status !== 200) {
//         console.log('Looks like there was a problem. Status Code: ' +
//           response.status);
//         return;
//       }

//       // Examine the text in the response
//       response.json().then(function(data) {
//         console.log(data);
//       });
//     }
//   )
//   .catch(function(err) {
//     console.log('Fetch Error :-S', err);
//   });

let test = [];

fetch('http://localhost:3000/products')
  .then(response => response.json())
  .then(data => console.log([...data]));

export default function Home() {
  return (
    <ProductContextProvider>
      <Segment basic>
        <Header as="h3">Home</Header>
        {/* <ProductForm /> */}
        <ProductTable tag=""/>
      </Segment>
    </ProductContextProvider>
  );
}