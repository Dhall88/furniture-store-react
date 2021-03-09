import React, { useState, useContext } from "react";
import { CartContext } from "../context/cart-context";
import { Container, Row, Col, Pagination, PageItem, Image, Modal, Carousel, Table, Button} from "react-bootstrap"

export default function Cart() {

  console.log('loading cart')
    const [state, dispatch] = useContext(CartContext);

    const link = `${process.env.PUBLIC_URL}/assets/imgs/`

    const removeItem = (product) => {
        console.log(product._id)
        dispatch({
          type: "DEL_PRODUCT",
          payload: product._id
        });
      };
    

    const rows = state.products.map(product => {
        return  <tr>
                  <td style={{width: 20 + '%'}}><Image src={`${link}${product.pictures[0]}`} fluid/></td>
                  <td>{product.name}</td>
                  <td>{product.quantity}</td>
                  <td>{(product.quantity*product.price).toFixed(2)}</td>
                  <td><Button onClick={()=>removeItem(product)}>Remove</Button></td>
                </tr>
    })
  return (
    <div className="response">

      <Table striped bordered hover>
      <tbody>
        {rows}
      </tbody>
    </Table>
  </div>

  );
}