import React, { useState, useContext } from "react";
import { Segment, Header } from "semantic-ui-react";
import { CartContext } from "../context/cart-context";

export default function Cart() {
    const [state, dispatch] = useContext(CartContext);
  return (

      <ul>
          {state.products.map(product => {
              return <li>{product.name}</li>
          })}
      </ul>

  );
}