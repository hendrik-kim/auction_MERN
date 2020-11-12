import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Product from './Product';

const Post = ({ post }) => {
  return (
    <>
      <Card className="my-3 p-3 rounded">
        <Link to={`/post/${post._id}`}>
          <Card.Body>
            {/* <Link to={`/product/${product._id}`}> */}
            <Card.Img src={post.postItems[0].image} variant="top" />
            {/* </Link> */}
            {/* <Link to={`/product/${product._id}`}> */}
            <Card.Title as="div">
              <strong>{post.postItems[0].name}</strong>
            </Card.Title>
            {/* </Link> */}

            {/* <Card.Text as="div">
          <Rating
            value={product.rating}
            text={`${product.numReviews} reviews`}
          />
        </Card.Text> */}

            <Card.Text as="h3">${post.postItems[0].price}</Card.Text>
          </Card.Body>
          {/* <Product product={post.postItems[0]} /> */}

          <Card.Body>
            <Link to={`/post/${post._id}`}>
              <Card.Title as="div">
                <strong>{post.title}</strong>
              </Card.Title>
            </Link>

            <Card.Text as="div">
              <Card.Text>{post.content}</Card.Text>
              {/* <Rating
              value={post.content}
              // text={`${product.numReviews} reviews`}
            /> */}
            </Card.Text>

            {/* <Card.Text as="h3">${product.price}</Card.Text> */}
          </Card.Body>
        </Link>
      </Card>
    </>
  );
};

export default Post;
