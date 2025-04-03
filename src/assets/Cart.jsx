import React from "react";
import { useCart } from "./CartContext";
import { Form, Container, Row, Col, Button } from "react-bootstrap";
import { FaTrashAlt } from "react-icons/fa";

function Cart() {
  const { cart, dispatch } = useCart();

  const handleRemove = (id) => {
    fetch(`http://localhost:3000/cart/${id}`, { method: "DELETE" })
      .then(() => {
        dispatch({ type: "REMOVE_ITEM", payload: id });
      })
      .catch((err) => console.error("Error removing item:", err));
  };

  const handleQuantityChange = (id, qty) => {
    dispatch({ type: "CHANGE_QTY", payload: { id, qty } });
  };

  const getTotal = () => {
    return cart.reduce((total, item) => total + item.qty * item.price, 0);
  };

  return (
    <Container>
      <h1 className="text-center">Cart Items</h1>
      <Row>
        <Col md={9}>
          <table className="table">
            <thead>
              <tr>
                <th>ID</th>
                <th>PRODUCT</th>
                <th>NAME</th>
                <th>PRICE</th>
                <th>QUANTITY</th>
                <th>DELETE</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item) => (
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>
                    <img src={item.image} height={80} width={80} alt={item.name} />
                  </td>
                  <td>{item.name}</td>
                  <td>₹ {item.price}</td>
                  <td>
                    <Form.Select
                      value={item.qty}
                      onChange={(e) =>
                        handleQuantityChange(item.id, Number(e.target.value))
                      }
                    >
                      {[...Array(item.stock).keys()].map((x) => (
                        <option key={x + 1} value={x + 1}>
                          {x + 1}
                        </option>
                      ))}
                    </Form.Select>
                  </td>
                  <td>
                    <FaTrashAlt
                      className="text-danger fs-4"
                      onClick={() => handleRemove(item.id)}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </Col>
        <Col md={3} className="bg-dark text-white p-3">
          <h3>Subtotal</h3>
          <h4 className="mt-3">Total Cart Items: {cart.length}</h4>
          <h4 className="mt-3">Total Cost: ₹ {getTotal()}</h4>
          <Button variant="success" className="mt-4 mb-4">
            Proceed to Checkout
          </Button>
        </Col>
      </Row>
    </Container>
  );
}

export default Cart;
