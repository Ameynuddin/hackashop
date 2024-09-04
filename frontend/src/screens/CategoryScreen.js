import React, { useState, useEffect, useContext } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import { Card, Button, Alert} from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Rating from '../components/Rating';
import { Store } from '../Store';

function CategoryScreen() {
  const { category } = useParams();
  const [products, setProducts] = useState([]);
  const [error, setError] = useState("");
  const { state, dispatch: ctxDispatch } = useContext(Store);
  const { cart: { cartItems } } = state;

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const { data } = await axios.get(`${process.env.REACT_APP_API_URL}/api/products/category/${category}`);
        setProducts(data);
      } catch (error) {
        setError("Failed to fetch products. Please try again later.");
      }
    };
    fetchProducts();
  }, [category]);

  const addToCartHandler = async (product) => {
    const existItem = cartItems.find((x) => x._id === product._id);
    const quantity = existItem ? existItem.quantity + 1 : 1;
    const { data } = await axios.get(`${process.env.REACT_APP_API_URL}/api/products/${product._id}`);
    if (data.countInStock < quantity) {
      window.alert('Sorry. Product is out of stock');
      return;
    }
    ctxDispatch({
      type: 'CART_ADD_ITEM',
      payload: { ...product, quantity },
    });
  };

  return (
    <div>
      {error && <Alert variant="danger">{error}</Alert>}
      <Row className="flex-wrap mt-4">
        {products.map((product) => (
          <Col key={product.slug} sm={6} md={4} lg={3} className="mb-3">
            <Card>
              <Link to={`/product/${product.slug}`}>
                <Card.Img variant="top" src={product.image} alt={product.name} style={{ width: "180px", height: "220px" }} />
              </Link>
              <Card.Body>
                <Link to={`/product/${product.slug}`}>
                  <Card.Title>{product.name}</Card.Title>
                </Link>
                <Rating rating={product.rating} numReviews={product.numReviews} />
                <Card.Text>${product.price}</Card.Text>
                {product.countInStock === 0 ? (
                  <Button variant="light" disabled>
                    Out of stock
                  </Button >
                ) : (
                  <Button onClick={() => addToCartHandler(product)}>Add to cart</Button>
                )}
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default CategoryScreen;