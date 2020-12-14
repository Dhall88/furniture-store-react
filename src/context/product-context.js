import React, { useReducer, createContext, useEffect } from "react";

export const ProductContext = createContext();

  const initialState = {
  products: [
    {
      name: "test",
      description: "test",
      price: 100,
      tags: "testestest"
    }
  ],
  loading: false,
  error: null
};


const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_PRODUCT":
      return {
        products: [...state.products, action.payload]
      };
    case "DEL_PRODUCT":
      return {
        products: state.products.filter(
          product => product.id !== action.payload
        )
      };
    case "START":
      return {
        loading: true
      };
    case "COMPLETE":
      return {
        loading: false
      };
    default:
      throw new Error();
  }
};


export const ProductContextProvider = props => {
  const [state, dispatch] = useReducer(reducer, initialState);



  return (
    <ProductContext.Provider value={[state, dispatch]}>
      {props.children}
    </ProductContext.Provider>
  );
};