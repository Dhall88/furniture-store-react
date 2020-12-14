import React, { useReducer, createContext, useEffect, useContext } from 'react'
import { Segment, Header } from "semantic-ui-react";
// import ProductForm from "../components/product-form";
import ProductTable from "../components/product-table";
import { ProductContextProvider, ProductContext } from "../context/product-context";
import Catagory from './catagory'


export default function Bathroom(products) {
  return (
    <Catagory products={products} tag='bathroom'/>
  );
}