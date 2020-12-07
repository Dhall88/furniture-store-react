import React, { useState, useContext } from "react";
import { Segment, Table, Button, Icon } from "semantic-ui-react";
import { ProductContext } from "../context/product-context";

export default function ProductTable() {
  // Subscribe to `products` state and access dispatch function
  const [state, dispatch] = useContext(ProductContext);
  // Declare a local state to be used internally by this component
  const [selectedId, setSelectedId] = useState();

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

  const rows = state.products.map(product => (
    <Table.Row
      key={product.id}
      onClick={() => setSelectedId(product.id)}
      active={product.id === selectedId}
    >
      <Table.Cell>{product.id}</Table.Cell>
      <Table.Cell>{product.name}</Table.Cell>
      <Table.Cell>{product.price}</Table.Cell>
    </Table.Row>
  ));

  return (
    <Segment>
      <Table celled striped selectable>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Id</Table.HeaderCell>
            <Table.HeaderCell>Name</Table.HeaderCell>
            <Table.HeaderCell>Price</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>{rows}</Table.Body>
        <Table.Footer fullWidth>
          <Table.Row>
            <Table.HeaderCell />
            <Table.HeaderCell colSpan="4">
              <Button
                floated="right"
                icon
                labelPosition="left"
                color="red"
                size="small"
                disabled={!selectedId}
                // onClick={}
              > 
              <Icon name="trash" /> Remove User
              </Button>
            </Table.HeaderCell>
          </Table.Row>
        </Table.Footer>
      </Table>
    </Segment>
  );
}