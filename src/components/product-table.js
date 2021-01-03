import React, { useState, useContext, useEffect } from "react";
import { Segment, Table, Button, Icon } from "semantic-ui-react";
import { Container, Row, Col, Pagination, PageItem} from "react-bootstrap"
import {LinkContainer} from "react-router-bootstrap"
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

// PRODUCTS
// Math.ceil(tagFilter(props.products).length/12)

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
                  {product!==null?product.name:""}
              </Col>
      })

      row1 = rows[1].map(product => {
        return <Col>
                  {product!==null?product.name:""}
              </Col>
      })

      row2 = rows[2].map(product => {
        return <Col>
                  {product!==null?product.name:""}
              </Col>
      })

      row3 = rows[3].map(product => {
        return <Col>
                  {product!==null?product.name:""}
              </Col>
      })
        
      

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
    // <Segment>
    // {console.log('rendered')}
    //   <Table celled striped selectable>
    //     <Table.Header>
    //       <Table.Row>
    //         <Table.HeaderCell>Id</Table.HeaderCell>
    //         <Table.HeaderCell>Name</Table.HeaderCell>
    //         <Table.HeaderCell>Price</Table.HeaderCell>
    //         <Table.HeaderCell>Description</Table.HeaderCell>
    //       </Table.Row>
    //     </Table.Header>
    //     <Table.Body>{rows}</Table.Body>
    //     <Table.Footer fullWidth>
    //       <Table.Row>
    //         <Table.HeaderCell />
    //         <Table.HeaderCell colSpan="4">
              /* <Button
                floated="right"
                icon
                labelPosition="left"
                color="red"
                size="small"
                disabled={!selectedId}
                // onClick={}
              >  */
              /* <Icon name="trash" /> Remove User
              </Button> */
            /* </Table.HeaderCell>
          </Table.Row>
        </Table.Footer>
      </Table>
    </Segment> */
              <React.Fragment>
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
              <div>
                    <Pagination>{items}</Pagination>
                    {/* <div>{active}</div> */}

              </div>
              </React.Fragment>

  );
}

export default ProductTable;