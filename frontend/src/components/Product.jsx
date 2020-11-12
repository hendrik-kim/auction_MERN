import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Card, Col, Image, ListGroup, Row, Button } from 'react-bootstrap';

const Product = ({ product, history, match }) => {
  const addToBasketHandler = () => {
    history.push(`/wishlist/${match.params.id}/${product._id}`);
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
            <ListGroup.Item>
              <Row>
                <Col>Status:</Col>
                <Col>
                  {product.countInStock > 0 ? 'Available' : 'No available'}
                </Col>
              </Row>
            </ListGroup.Item>
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
