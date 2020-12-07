import React, { useReducer, createContext } from "react";

export const CartContext = createContext();

const initialState = {
  products: [
    {
      id: "098",
      name: "Bed",
      price: 100,
      description: "big and sqishy",
      tags: ["bedroom"]
    },
    {
      id: "099",
      name: "Table",
      price: 150,
      description: "good at holding stuff",
      tags: ["bedroom","dining room"]
    },
    {
      id: "100",
      name: "TV Stand",
      price: 50,
      description: "holds a tv nicely",
      tags: ["living room, storage"]
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

export const CartContextProvider = props => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <CartContext.Provider value={[state, dispatch]}>
      {props.children}
    </CartContext.Provider>
  );
};