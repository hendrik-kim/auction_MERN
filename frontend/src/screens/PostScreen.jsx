import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Row, Col, Image, Card, ListGroup, Button } from 'react-bootstrap';
import Message from '../components/utilities/Message';
import Loader from '../components/utilities/Loader';
import { listPostDetails, defaultPostItem } from '../actions/postActions';
import Product from './../components/Product';

const PostScreen = ({ history, match }) => {
  const addToBasketHandler = () => {
    history.push(`/wishlist/${match.params.id}`);
    // history.push(`/wishlist/${match.params.id}?qty=${qty}`);
  };
  const dispatch = useDispatch();

  const postDetails = useSelector((state) => state.postDetails);
  const postDefaultItem = useSelector((state) => state.postDefaultItem);

  const { loading, error, post } = postDetails;
  const { defaultItem } = postDefaultItem;

  const [selectedItem, setSelectedItem] = useState('');

  useEffect(() => {
    dispatch(listPostDetails(match.params.id));
    dispatch(defaultPostItem(match.params.id));
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
                  onClick={() => setSelectedItem(post)}
                />
              </Row>
            ))}
          </Col>
          {selectedItem ? (
            <Product product={selectedItem} history={history} match={match} />
          ) : (
            <Product product={defaultItem} history={history} match={match} />
          )}
          {/* <Col md={3}> */}
          {/* <ListGroup variant="flush">
            <ListGroup.Item>
              <Button
                onClick={addToBasketHandler}
                className="btn-block"
                type="button"
                disabled={selectedItem.countInStock === 0}
              >
                Add To Wish List
              </Button>
              <Button
                className="btn-block btn-dark"
                type="button"
                disabled={selectedItem.countInStock === 0}
              >
                Bidding
              </Button>
            </ListGroup.Item>
          </ListGroup> */}
        </Row>
      )}
    </>
  );
};

export default PostScreen;
