import { useContext } from 'react';
import { Store } from '../Store';
import { Helmet } from 'react-helmet-async';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import MessageBox from '../components/MessageBox';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Container } from 'react-bootstrap';

export default function CartScreen() {
    const navigate = useNavigate();
    const { state, dispatch: ctxDispatch } = useContext(Store);
    const {
        cart: { cartItems },
    } = state;

    const updateCartHandler = async (item, quantity) => {
        const { data } = await axios.get(`${process.env.REACT_APP_API_URL}/api/products/${item._id}`);
        if (data.countInStock < quantity) {
            window.alert('Sorry. Product is out of stock');
            return;
        }
        ctxDispatch({
            type: 'CART_ADD_ITEM',
            payload: { ...item, quantity },
        });
    };
    const removeItemHandler = (item) => {
        ctxDispatch({ type: 'CART_REMOVE_ITEM', payload: item });
    };

    const checkoutHandler = () => {
        navigate('/signin?redirect=/shipping');
    };

    return (
        <Container>
            <Helmet>
                <title>Shopping Cart</title>
            </Helmet>

            <h1 className='mt-4 mb-4'>Shopping Cart</h1>

            <Row className = 'mb-4 g-3'>
                <Col md={7} lg={6}>
                    {cartItems.length === 0 ? (
                        <MessageBox>
                            Cart is empty. <Link to="/categories/all-products">Go Shopping</Link>
                        </MessageBox>
                    ) : (
                        <ListGroup>
                            {cartItems.map((item) => (
                                <ListGroup.Item key={item._id} className='shadow'>
                                    <Row className="d-flex justify-content-center align-items-center text-align-center">
                                        <Col xs={12} md={6} className='d-flex flex-wrap justify-content-center'>
                                            <img
                                                src={item.image}
                                                alt={item.name}
                                                className="img-fluid rounded img-thumbnail border-0"
                                            ></img>
                                            <Link to={`/product/${item.slug}`} className='fw-bold mt-2'>{item.name}</Link>
                                        </Col>

                                        <Col xs={2} md={3} className='d-flex justify-content-center align-items-center'>
                                            <Button
                                                onClick={() =>
                                                    updateCartHandler(item, item.quantity - 1)
                                                }
                                                variant="light"
                                                disabled={item.quantity === 1}
                                                className='p-2 m-2'
                                            >
                                                <i className="fas fa-minus-circle"></i>
                                            </Button>
                                            <span>{item.quantity}</span>
                                            <Button
                                                variant="light"
                                                onClick={() =>
                                                    updateCartHandler(item, item.quantity + 1)
                                                }
                                                disabled={item.quantity === item.countInStock}
                                                className='p-2 m-2'
                                            >
                                                <i className="fas fa-plus-circle"></i>
                                            </Button>
                                        </Col>

                                        <Col xs={2} md={2} className='d-flex justify-content-center align-items-center'>${item.price}</Col>

                                        <Col xs={1} md={1} className='d-flex justify-content-center align-items-center'>
                                            <Button
                                                onClick={() => removeItemHandler(item)}
                                                variant="light"
                                                className='p-2 m-2'
                                            >
                                                <i className="fas fa-trash text-danger"></i>
                                            </Button>
                                        </Col>
                                    </Row>
                                </ListGroup.Item>
                            ))}
                        </ListGroup>
                    )}
                </Col>
                <Col md={5} lg={6}>
                    <Card>
                        <Card.Body>
                            <ListGroup variant="flush">
                                <ListGroup.Item>
                                    <h3 className='fs-4'>
                                        Subtotal ({cartItems.reduce((a, c) => a + c.quantity, 0)}{' '}
                                        items) : $
                                        {cartItems.reduce((a, c) => a + c.price * c.quantity, 0)}
                                    </h3>
                                </ListGroup.Item>
                                <ListGroup.Item>
                                    <div className="d-grid">
                                        <Button
                                            type="button"
                                            variant="primary"
                                            onClick={checkoutHandler}
                                            disabled={cartItems.length === 0}
                                        >
                                            Proceed to Checkout
                                        </Button>
                                    </div>
                                </ListGroup.Item>
                            </ListGroup>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}