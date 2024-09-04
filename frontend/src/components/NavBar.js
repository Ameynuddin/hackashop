import React, { useState } from 'react';
import {
    MDBContainer,
    MDBNavbar,
    MDBNavbarBrand,
    MDBNavbarToggler,
    MDBIcon,
    MDBNavbarNav,
    MDBNavbarItem,
    MDBNavbarLink,
    MDBBadge,
    MDBBtn,
    MDBDropdown,
    MDBDropdownToggle,
    MDBDropdownMenu,
    MDBDropdownItem,
    MDBCollapse,
} from 'mdb-react-ui-kit';
import { useContext } from 'react';
import { Store } from '../Store';

export default function NavBar() {
    const { state, dispatch: ctxDispatch } = useContext(Store);
    const { cart, userInfo } = state;

    const signoutHandler = () => {
        ctxDispatch({ type: "USER_SIGNOUT" });
        localStorage.removeItem("userInfo");
        localStorage.removeItem("shippingAddress");
        localStorage.removeItem("paymentMethod");
        window.location.href = "/signin";
    };

    const [openNav, setOpenNav] = useState(false);

    return (
        <MDBNavbar expand='lg' sticky light bgColor='light' className='fs-5'>
            <MDBContainer fluid>
                <MDBNavbarBrand href="/">
                    <div className='px-2'>
                        <img
                            src="/wardrobe.png"
                            alt="Hackashop Logo"
                            width="30"
                            height="30"
                        /></div>
                    <div>
                        <span className="fw-bold">Hackashop</span>
                    </div>
                </MDBNavbarBrand>

                <MDBNavbarToggler
                    type='button'
                    aria-expanded={openNav}
                    aria-label='Toggle navigation'
                    onClick={() => setOpenNav(!openNav)}
                >
                    <MDBIcon icon='bars' fas />
                </MDBNavbarToggler>

                <MDBCollapse navbar open={openNav}>
                    <MDBNavbarNav className="d-flex align-items-center w-100">
                        <MDBNavbarItem>
                            <MDBNavbarLink active aria-current='page' href="/categories/all-products">Products</MDBNavbarLink>
                        </MDBNavbarItem>

                        {!openNav ? (
                            <>
                                <MDBNavbarItem className='px-3'>
                                    <MDBNavbarLink href='/cart'>
                                        <MDBIcon fas icon='shopping-cart'></MDBIcon>
                                        {cart.cartItems.length > 0 && (
                                            <MDBBadge pill color='danger'>
                                                {cart.cartItems.reduce((a, c) => a + c.quantity, 0)}
                                            </MDBBadge>
                                        )}
                                    </MDBNavbarLink>
                                </MDBNavbarItem>

                                {userInfo ? (
                                    <MDBNavbarItem>
                                        <MDBDropdown >
                                            <MDBDropdownToggle tag='a' className='nav-link' role='button'>
                                                <MDBIcon fas icon="user-circle" size='lg' />
                                                {userInfo.name}
                                            </MDBDropdownToggle>

                                            <MDBDropdownMenu>
                                                <MDBDropdownItem link>
                                                    <MDBNavbarLink aria-current='page' href="/profile">Profile</MDBNavbarLink>
                                                </MDBDropdownItem>
                                                <MDBDropdownItem link>
                                                    <MDBNavbarLink aria-current='page' href="/orderhistory">Order History</MDBNavbarLink>
                                                </MDBDropdownItem>
                                                <MDBDropdownItem link>
                                                    <MDBNavbarLink aria-current='page' href="#signout" onClick={signoutHandler}
                                                    >Sign Out</MDBNavbarLink>
                                                </MDBDropdownItem>
                                            </MDBDropdownMenu>
                                        </MDBDropdown>

                                    </MDBNavbarItem>
                                ) : (
                                    <MDBNavbarItem>
                                        <MDBBtn primary href="/signin">Sign In</MDBBtn>
                                    </MDBNavbarItem>
                                )}
                            </>
                        ) : (
                            <>
                                <MDBNavbarItem className='px-3'>
                                    <MDBNavbarLink href='/cart'>
                                        Cart
                                        {cart.cartItems.length > 0 && (
                                            <MDBBadge pill color='danger'>
                                                {cart.cartItems.reduce((a, c) => a + c.quantity, 0)}
                                            </MDBBadge>
                                        )}
                                    </MDBNavbarLink>
                                </MDBNavbarItem>

                                {userInfo ? (
                                    <MDBNavbarItem>
                                        <MDBDropdown >
                                            <MDBDropdownToggle tag='a' className='nav-link' role='button'>
                                                <MDBIcon fas icon="user-circle" size='lg' />
                                                {userInfo.name}
                                            </MDBDropdownToggle>

                                            <MDBDropdownMenu>
                                                <MDBDropdownItem link>
                                                    <MDBNavbarLink aria-current='page' href="/profile">Profile</MDBNavbarLink>
                                                </MDBDropdownItem>
                                                <MDBDropdownItem link>
                                                    <MDBNavbarLink aria-current='page' href="/orderhistory">Order History</MDBNavbarLink>
                                                </MDBDropdownItem>
                                                <MDBDropdownItem link>
                                                    <MDBNavbarLink aria-current='page' href="#signout" onClick={signoutHandler}
                                                    >Sign Out</MDBNavbarLink>
                                                </MDBDropdownItem>
                                            </MDBDropdownMenu>
                                        </MDBDropdown>

                                    </MDBNavbarItem>
                                ) : (
                                    <MDBNavbarItem className='px-3'>
                                        <MDBNavbarLink active aria-current='page' href="/signin">Sign In</MDBNavbarLink>
                                    </MDBNavbarItem>
                                )}
                            </>
                        )}

                    </MDBNavbarNav>
                </MDBCollapse>


            </MDBContainer>
        </MDBNavbar >
    );
}