import React, { useState, useContext, useEffect } from "react";
import { Segment, Table, Button, Icon } from "semantic-ui-react";
import { Container, Row, Col, Pagination, PageItem} from "react-bootstrap"
// import { ProductContext } from "../context/product-context";

// export default function ProductTable() {

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
    const filter = (arr) => {
      let res = [];
      console.log(props.tag)
      for(let i = 0; i<arr.length; i++) {
        if(arr[i].tags.search(props.tag)!=-1) {
          res.push(arr[i])
        }
      }
      return res;
    }

console.log(props.products)
const products = filter(props.products)
const pages = Math.ceil(products.length/12)

let active = 2;
let items = [];
for (let number = 1; number <= 5; number++) {
  items.push(
    <PageItem key={number} active={number === active}>
      {number}
    </PageItem>,
  );
}
        
        // <Table.Row
        //   key={product.id}
        //   // onClick={() => setSelectedId(product.id)}
        //   // active={product.id === selectedId}
        // >
        //   <Table.Cell>{product.id}</Table.Cell>
        //   <Table.Cell>{product.name}</Table.Cell>
        //   <Table.Cell>{product.price}</Table.Cell>
        //   <Table.Cell>{product.description}</Table.Cell>
        // </Table.Row>
        // <Container>
        //   <Row>
        //     <Col></Col>
        //   </Row>
        // </Container>

  
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
              <div>
                    <Pagination>{items}</Pagination>

              </div>

  );
}

export default ProductTable;