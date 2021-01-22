import React, { useState, useContext, useEffect } from "react";
import { Segment, Table, Button, Icon } from "semantic-ui-react";
import { Container, Row, Col, Pagination, PageItem, Image, Modal, Carousel} from "react-bootstrap"
import {LinkContainer} from "react-router-bootstrap"
// import image from '../imgs/balta-metal-bed/balta-metal-bed-1.jpg'
// import { ProductContext } from "../context/product-context";
import ProductView from '../views/product-view'
import { HashRouter, NavLink, Route } from 'react-router-dom';


// export default function ProductTable() {

// console.log()

const ProductTable = (props) => {

  const [show, setShow] = useState(false);
  const[activeId, setId] = useState(null)

  // if(activeId!==null){

  // }

  const handleClose = () => setShow(false);
  const handleShow = (id) => {
    setShow(true);
    setId(id);
  }
  const handleId = (id) => setId(id);


  // // Subscribe to `products` state and access dispatch function
  // const [state, dispatch] = useContext(ProductContext);
  // // Declare a local state to be used internally by this component
  // const [selectedId, setSelectedId] = useState();

  // console.log(props)

//   const delproduct = id => {
//     dispatch({
//       type: "DEL_product",
//       payload: id
//     });
//   };

//   const onRemoveUser = () => {
//     delproduct(selectedId);
//     setSelectedId(null); // Clear selection
//   };

    // useEffect(() => {
    //   fetch('http://localhost:3000/products')
    //   .then(response => response.json())
    //   .then(data => {   
    //     console.log(data)
    //     dispatch({
    //         type: "ADD_PRODUCT",
    //         payload: data
    //       },[]);
    //   }
    //   )
    // })

    const imgStyle = {
      height: '200px',
      width: '200px'
    }

    const tagFilter = (arr) => {
      let res = [];
      // console.log(props.tag)
      for(let i = 0; i<arr.length; i++) {
        if(arr[i].tags.search(props.tag)!=-1) {
          res.push(arr[i])
        }
      }
      return res;
    }

    const activePage = () => {
    
      if (Number.isInteger(active)&&active<=pages) {
        return active
      }
      return 1 
    }


    const pages = Math.ceil((tagFilter(props.products).length)/9);
    const arr = window.location.href.split('/');
    const active = Number(arr[arr.length-1])
    const currentPaginationPage = activePage();
    const filteredProducts = tagFilter(props.products);




    // Build rows for Table

    let rows=[[],[],[]];
    let row0, row1, row2=[];
    
      for(let i = 0; i<3; i++) {
        for(let j = 0; j<3; j++) {
          if(filteredProducts[(i*3+j+((currentPaginationPage-1)*9))]===undefined) {
          rows[i].push(null)
          }
          else {
            rows[i].push(filteredProducts[(i*3+j+((currentPaginationPage-1)*9))])
          }
        }
      }
      console.log(active);
      console.log(currentPaginationPage)

      const myFunc = (event) => {
        console.log(event.currentTarget)
      } 


      const link = `${process.env.PUBLIC_URL}/assets/imgs/`

      row0 = rows[0].map((product,index) => {

        return <Col>
        
                  {product!==null?
                // <LinkContainer to="/product/test">
                  <Container onClick={() => handleShow(index)} 
                    id={index}>
                    <h3>{product!==null?product.name:""}</h3>
                    <Image src={product!==null?`${link}${product.pictures[0]}`:""} thumbnail/>
                  </Container>
                  // </LinkContainer>
                  :""
                  } 
                 
              </Col>
      })

      row1 = rows[1].map((product,index) => {
        // console.log(product.pictures[0])
        
        return <Col>
        {product!==null?
          <Container onClick={myFunc} id={index+3}>
            <h3>{product!==null?product.name:""}</h3>
            <img src={product!==null?`${link}${product.pictures[0]}`:""} style={imgStyle}></img>
          </Container>:""
          
        } 
    </Col>
      })

      row2 = rows[2].map((product,index) => {
        return <Col>
        {product!==null?
        <LinkContainer to={`/product`}>
          <Container onClick={myFunc} id={index+6}>
            <h3>{product!==null?product.name:""}</h3>
            <img src={product!==null?`${link}${product.pictures[0]}`:""} style={imgStyle}></img>
          </Container>
          </LinkContainer>:""
          
        } 
    </Col>
      })
        
      // Build pagination buttons

      let items = [];

      for (let number = 1; number <= pages; number++) {
        items.push(
          <LinkContainer to={`/bedroom/${number}`}>
          <Pagination.Item key={number} activeLabel='(current)' active={number===currentPaginationPage} >
            {number}
          </Pagination.Item>
          </LinkContainer>
        );
      }

  
  return (
              <React.Fragment>
                {show?
                <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                  <Modal.Title>{filteredProducts[activeId].name}</Modal.Title>
                </Modal.Header>
                <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={handleClose}>
                    Close
                  </Button>
                  <Button variant="primary" onClick={handleClose}>
                    Save Changes
                  </Button>
                </Modal.Footer>
              </Modal>:""}
                <Container>
                  <Row>
                    {row0}
                  </Row>
                  <Row>
                    {row1}
                  </Row>
                  <Row>
                    {row2}
                  </Row>
                  
                </Container>

                <Container>
                  <Pagination>{items}</Pagination>
                </Container>

              </React.Fragment>

  );
}

export default ProductTable;