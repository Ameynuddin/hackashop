import { Link } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Badge from 'react-bootstrap/Badge';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Container from 'react-bootstrap/Container';
import { LinkContainer } from 'react-router-bootstrap';
import { useContext } from 'react';
import { Store } from '../Store';

function NavBar() {
    const { state, dispatch: ctxDispatch } = useContext(Store);
    const { cart, userInfo } = state;

    const signoutHandler = () => {
        ctxDispatch({ type: "USER_SIGNOUT" });
        localStorage.removeItem("userInfo");
        localStorage.removeItem("shippingAddress");
        localStorage.removeItem("paymentMethod");
        window.location.href = "/signin";
    };

    return (
        <Navbar bg="primary" data-bs-theme="dark">
            <Container>
                <LinkContainer to="/">
                    <Navbar.Brand>
                        <img
                            src="/wardrobe.png"
                            alt="Hackashop Logo"
                            width="30"
                            height="30"
                            className="d-inline-block align-top"
                        />{' '}
                        Hackashop
                    </Navbar.Brand>
                </LinkContainer>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Link to="/categories/all-products" className="nav-link">
                            Products
                        </Link>
                        <Link to="/cart" className="nav-link">
                            Cart
                            {cart.cartItems.length > 0 && (
                                <Badge pill bg="danger">
                                    {cart.cartItems.reduce((a, c) => a + c.quantity, 0)}
                                </Badge>
                            )}
                        </Link>
                        {userInfo ? (
                            <NavDropdown title={userInfo.name} id="basic-nav-dropdown">
                                <LinkContainer to="/profile">
                                    <NavDropdown.Item>User Profile</NavDropdown.Item>
                                </LinkContainer>
                                <LinkContainer to="/orderhistory">
                                    <NavDropdown.Item>Order History</NavDropdown.Item>
                                </LinkContainer>
                                <NavDropdown.Divider />
                                <Link
                                    className="dropdown-item"
                                    to="#signout"
                                    onClick={signoutHandler}
                                >
                                    Sign Out
                                </Link>
                            </NavDropdown>
                        ) : (
                            <Link className="nav-link" to="/signin">
                                Sign In
                            </Link>
                        )}
                    </Nav>
                </Navbar.Collapse>

            </Container>
        </Navbar>
    );
}


export default NavBar;