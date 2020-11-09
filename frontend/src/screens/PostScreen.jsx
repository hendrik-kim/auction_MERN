import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Image, ListGroup, Card, Button } from 'react-bootstrap';
import posts from '../data/posts.js';
import ProductDetail from './../components/ProductDetail';

const PostScreen = ({ match }) => {
  const post = posts[0].products.find((p) => p._id === match.params.id);

  // render different component by clicking button setState

  const [product, setProduct] = useState({});

  const sendProductData = () => {
    setProduct();
  };

  return (
    <>
      <Link className="btn btn-light my-3" to="/">
        Go Back
      </Link>
      <Row>
        {/* Select one item in list, then render in other Col */}
        <Col sm={12} md={6} lg={4} xl={3}>
          {posts[0].products.map((product) => (
            <Row key={product._id}>
              <Image src={product.image} alt={product.name} fluid />
            </Row>
          ))}
        </Col>

        <Col>
          <ProductDetail product="2" />
        </Col>
        {/* 
        1. click image
        2. find image _id
        3. render product detail by _id


        */}
        <Col md={1}>
          <Image src={post.image} alt={post.name} fluid />
        </Col>
        <Col md={5}>
          <Image src={post.image} alt={post.name} fluid />
        </Col>
        <Col md={3}>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <h3>{post.name}</h3>
            </ListGroup.Item>
            <ListGroup.Item>
              {/* <Rating value={post.rating} text={`${post.numReviews} reviews`} /> */}
            </ListGroup.Item>
            <ListGroup.Item>Price: ${post.price}</ListGroup.Item>
            <ListGroup.Item>Description: {post.description}</ListGroup.Item>
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
              {product.countInStock > 1 ? (
                <ListGroup.Item>
                  <Row>
                    <Col>Qty:</Col>
                    <Col>{product.countInStock}</Col>
                  </Row>
                </ListGroup.Item>
              ) : (
                ''
              )}

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
      </Row>
    </>
  );
};

export default PostScreen;
