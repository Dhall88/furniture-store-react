import React from "react";
import { Segment, Header } from "semantic-ui-react";
// import ProductForm from "../components/product-form";
import ProductTable from "../components/product-table";
// import { ProductContextProvider } from "../context/product-context";
import {Modal, Button} from "react-bootstrap"
import {useState} from "react"

export default function Products() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
      <div>HEYYYYY</div>
  );
}