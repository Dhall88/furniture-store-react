import React, { useState, useContext } from "react";
import { CartContext } from "../context/cart-context";
import { Container, Row, Col, Pagination, PageItem, Image, Modal, Carousel, Table} from "react-bootstrap"

export default function Cart() {
    const [state, dispatch] = useContext(CartContext);

    const link = `${process.env.PUBLIC_URL}/assets/imgs/`

    const rows = state.products.map(product => {
        return <tr>
            <td><Image src={`${link}${product.pictures[0]}`} thumbnail/></td>
            <td>{product.name}</td>
            <td>{product.quantity}</td>
            <td>{(product.quantity*product.price).toFixed(2)}</td>
        </tr>
    })
  return (

    <Table striped bordered hover>
    <tbody>
      {rows}
    </tbody>
  </Table>

  );
}