import React from 'react';
import { Link } from 'react-router-dom';
import { Card, Col, Image, ListGroup, Row, Button } from 'react-bootstrap';
import Rating from './Rating';

const Product = ({ product }) => {
  const addToBasketHandler = () => {
    // history.push(`/wishlist/${match.params.id}?qty=${qty}`);
  };

  return (
    <>
      <Col md={5}>
        <Image src={product.image} alt={product.name} fluid />
      </Col>
      <Col md={3}>
        <ListGroup variant="flush">
          <ListGroup.Item>
            <h3>{product.name}</h3>
          </ListGroup.Item>
          {/* <ListGroup.Item>
      <Rating
        value={post.rating}
        text={`${post.numReviews} reviews`}
      />
    </ListGroup.Item> */}
          <ListGroup.Item>Price: ${product.price}</ListGroup.Item>
          <ListGroup.Item>Description: {product.description}</ListGroup.Item>
        </ListGroup>
      </Col>
      <Col md={3}>
        <Card>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <Row>
                <Col>Price:</Col>
                <Col>
                  <strong>${product.price}</strong>
                </Col>
              </Row>
            </ListGroup.Item>
            {/* {product.countInStock > 0 ? (
              <ListGroup.Item>
                <Row>
                  <Col>Qty:</Col>
                  <Col>{product.countInStock}</Col>
                </Row>
              </ListGroup.Item>
            ) : (
              ''
            )} */}
            <ListGroup.Item>
              <Row>
                <Col>Status:</Col>
                <Col>
                  {product.countInStock > 0 ? 'Available' : 'No available'}
                </Col>
              </Row>
            </ListGroup.Item>
            {/* {product.countInStock > 0 && (
              <ListGroup.Item>
                <Row>
                  <Col>Qty</Col>
                  <Col>
                    <Form.Control
                      as="select"
                      value={qty}
                      onChange={(e) => setQty(e.target.value)}
                    >
                      {[...Array(product.countInStock).keys()].map((x) => (
                        <option key={x + 1} value={x + 1}>
                          {x + 1}
                        </option>
                      ))}
                    </Form.Control>
                  </Col>
                </Row>
              </ListGroup.Item>
            )} */}
            <ListGroup.Item>
              <Button
                onClick={addToBasketHandler}
                className="btn-block"
                type="button"
                disabled={product.countInStock === 0}
              >
                Add To Wish List
              </Button>
              <Button
                className="btn-block btn-dark"
                type="button"
                disabled={product.countInStock === 0}
              >
                Bidding
              </Button>
            </ListGroup.Item>
          </ListGroup>
        </Card>
      </Col>
    </>
  );
};

export default Product;
