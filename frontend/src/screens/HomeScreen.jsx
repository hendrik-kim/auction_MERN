import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Row, Col } from 'react-bootstrap';
import { listPosts } from '../actions/postActions';
import { listProducts } from '../actions/productActions';
import Product from '../components/Product';

// import Post from '../components/Post';
import Post from '../components/Post';

const HomeScreen = () => {
  const dispatch = useDispatch();

  // const productList = useSelector((state) => state.productList);
  const postList = useSelector((state) => state.postList);

  // const { loading, error, products } = productList;
  const { loading, error, posts } = postList;

  useEffect(() => {
    dispatch(listPosts());
    // dispatch(listProducts());
  }, [dispatch]);

  return (
    <>
      <h1>Latest Posts</h1>
      {loading ? (
        <h2>Loading...</h2>
      ) : error ? (
        <h3>{error}</h3>
      ) : (
        <Row>
          {posts.map((post) => (
            <Col key={post._id}>
              <Post post={post} />
            </Col>
          ))}
        </Row>
        // <Row>
        //   {products.map((product) => (
        //     <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
        //       <Product product={product} />
        //     </Col>
        //   ))}
        // </Row>
      )}
    </>
  );
};

export default HomeScreen;
