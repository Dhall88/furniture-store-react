import React, { useState, useContext, useEffect } from "react";
import { Segment, Table, Button, Icon } from "semantic-ui-react";
import { Container, Row, Col, Pagination, PageItem} from "react-bootstrap"
import {LinkContainer} from "react-router-bootstrap"
// import image from '../imgs/balta-metal-bed/balta-metal-bed-1.jpg'
// import { ProductContext } from "../context/product-context";

// export default function ProductTable() {

// console.log()

const ProductTable = (props) => {
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

    const tagFilter = (arr) => {
      let res = [];
      console.log(props.tag)
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


    const pages = Math.ceil((tagFilter(props.products).length)/12);
    const arr = window.location.href.split('/');
    const active = Number(arr[arr.length-1])
    const currentPaginationPage = activePage();
    const filteredProducts = tagFilter(props.products);

    // Build rows for Table

    let rows=[[],[],[],[]];
    let row0, row1, row2, row3=[]
    
      for(let i = 0; i<4; i++) {
        for(let j = 0; j<3; j++) {
          if(filteredProducts[(i*3+j)]===undefined) {
          rows[i].push(null)
          }
          else {
            rows[i].push(filteredProducts[(i*3+j)])
          }
        }
      }

      row0 = rows[0].map(product => {
        return <Col>
                  <Container>
                    <h3>{product!==null?product.name:""}</h3>
                    <img src={product!==null?product.pictures[0]:""}></img>
                  </Container>
              </Col>
      })

      row1 = rows[1].map(product => {
        // console.log(product.pictures[0])
        return <Col>
                  <Container>
                    <h3>{product!==null?product.name:""}</h3>
                    <img src={product!==null?product.pictures[0]:""}></img>
                  </Container>
              </Col>
      })

      row2 = rows[2].map(product => {
        return <Col>
        <Container>
          <h3>{product!==null?product.name:""}</h3>
          <img src={product!==null?product.pictures[0]:""}></img>
        </Container>
    </Col>
      })

      row3 = rows[3].map(product => {
        return <Col>
        <Container>
          <h3>{product!==null?product.name:""}</h3>
          <img src={product!==null?product.pictures[0]:""}></img>
        </Container>
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
                {/* <img src={image}/> */}
                {/* <img src={"../imgs/balta-metal-bed/balta-metal-bed-1.jpg"}/> */}
                {/* <img src={require('../imgs/balta-metal-bed/balta-metal-bed-1.jpg')} /> */}
                {/* <img src={props.products[0].pictures[0]}></img> */}
                <img className="img-fluid" 
     src={`${process.env.PUBLIC_URL}/assets/balta-metal-bed-1.jpg`} 
     alt="logo"/>
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
                  <Row>
                    {row3}
                  </Row>
                </Container>

                <Container>
                  <Pagination>{items}</Pagination>
                </Container>

              </React.Fragment>

  );
}

export default ProductTable;