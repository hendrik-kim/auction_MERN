import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Row, Col, Image, ListGroup, Card, Button } from 'react-bootstrap';
import Rating from '../components/Rating';
import Message from '../components/utilities/Message';
import Loader from '../components/utilities/Loader';
import { listPostDetails } from '../actions/postActions';

const PostScreen = ({ match }) => {
  const dispatch = useDispatch();
  // = postDetails.post.postItems[0];

  // const productDetails =

  const postDetails = useSelector((state) => state.postDetails);
  const { loading, error, post } = postDetails;
  const initialState = ''; // post.postItems[0]
  const [product, setProduct] = useState(initialState);

  console.log(post.postItems[0]);
  console.log(post);

  useEffect(() => {
    dispatch(listPostDetails(match.params.id));

    setProduct(post.postItems[0]);
  }, [dispatch, match]);

  return (
    <>
      <Link className="btn btn-dark my-3" to="/">
        Go Back
      </Link>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <Row className="my-5">
          <Col md={1}>
            {post.postItems.map((post) => (
              <Row key={post._id} className="mb-3">
                <Image
                  src={post.image}
                  alt={post.name}
                  fluid
                  onClick={() => setProduct(post)}
                />
              </Row>
            ))}
          </Col>
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
              <ListGroup.Item>
                Description: {product.description}
              </ListGroup.Item>
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
                {post.countInStock > 1 ? (
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
      )}
    </>
  );
};

export default PostScreen;
