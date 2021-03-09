import React, { useState, useContext } from "react";
import { Button} from "semantic-ui-react";
import { Container, Row, Col, Pagination, Image, Modal, Carousel, InputGroup, FormControl, Form} from "react-bootstrap"
import {LinkContainer} from "react-router-bootstrap"
import {CartContext} from '../context/cart-context'


import { HashRouter, NavLink, Route } from 'react-router-dom';


// export default function ProductTable() {

// console.log()

const ProductTable = (props) => {

  const [show, setShow] = useState(false);
  const[activeId, setId] = useState(null);
  const [state, dispatch] = useContext(CartContext);
  const [quantity, setQuantity] = useState(1)
  // console.log(state.products)

  // if(activeId!==null){

  // }

  const handleClose = () => setShow(false);
  const handleShow = (id) => {
    setShow(true);
    setId(id);
  }

  const onSubmit = (e) => {
    let cartItem = filteredProducts[activeId];
    cartItem.quantity = quantity;
    dispatch({
      type: "ADD_PRODUCT",
      payload: cartItem
    });
    // Reset Form
  };



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


      const link = `${process.env.PUBLIC_URL}/assets/imgs/`

      row0 = rows[0].map((product,index) => {

        return <Col>
        
                  {product!==null?
                // <LinkContainer to="/product/test">
                  <Container onClick={() => handleShow(index+((currentPaginationPage-1)*9))} 
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
          <Container onClick={() => handleShow(index+3+((currentPaginationPage-1)*9))}>
            <h3>{product!==null?product.name:""}</h3>
            <Image src={product!==null?`${link}${product.pictures[0]}`:""} thumbnail/>
          </Container>:""
          
        } 
    </Col>
      })

      row2 = rows[2].map((product,index) => {
        return <Col>
        {product!==null?

          <Container onClick={() => handleShow(index+6+((currentPaginationPage-1)*9))}>
            <h3>{product!==null?product.name:""}</h3>
            <Image src={product!==null?`${link}${product.pictures[0]}`:""} thumbnail/>
          </Container>
          :""
          
        } 
    </Col>
      })
        
      // Build pagination buttons

      let items = [];

      for (let number = 1; number <= pages; number++) {
        items.push(
          <LinkContainer to={`/${props.tag}/${number}`}>
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
                <Modal.Body>
                <Carousel>
                  {filteredProducts[activeId].pictures.map(picture => {
                      return <Carousel.Item>
                      <img
                        className="d-block w-100"
                        src={`${link}${picture}`}
                        alt="First slide"
                      />
                    </Carousel.Item>
                  })}

</Carousel>
                  {filteredProducts[activeId].description}
                </Modal.Body>
                <Modal.Footer>
                  {/* <input type="number"></input> */}
                  <Form onSubmit={onSubmit}>

                    <InputGroup className="mb-3">
                      <InputGroup.Prepend>
                        <InputGroup.Text>#</InputGroup.Text>
                      </InputGroup.Prepend>
                      <FormControl type="number" value={quantity} onChange={e => {setQuantity(e.target.value)}}  />
                    </InputGroup>

                    <Button type="submit" variant="secondary">
                      Add To Cart
                    </Button>

                  </Form>

                  <Button variant="primary" onClick={handleClose}>
                    Close
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