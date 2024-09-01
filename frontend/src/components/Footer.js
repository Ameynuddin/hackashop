import React from 'react';
import {
    MDBFooter,
    MDBContainer,
    MDBRow, MDBCol,
    MDBIcon,
    MDBBtn
} from 'mdb-react-ui-kit';

function Footer() {
    return (
        <MDBFooter className='bg-dark text-center text-white'>
            <MDBContainer className='p-3 pb-0'>

                <section className=''>
                    <MDBContainer className='text-center text-md-start mt-5'>
                        <MDBRow className='mt-2'>
                            <MDBCol md='3' lg='4' xl='3' className='mx-auto mb-4'>
                                <h4 className='text-uppercasefw-bold mb-4'>
                                    <MDBIcon color='secondary' icon='gem' className='me-3' />
                                    Hackashop
                                </h4>
                                <p>
                                    Lorem ipsum dolor sit
                                    amet, consectetur adipisicing elit.
                                </p>
                            </MDBCol>

                            <MDBCol md='2' lg='2' xl='2' className='mx-auto mb-4'>
                                <h4 className='text-uppercase fw-bold mb-4'>Products</h4>
                                <p>
                                    <a href='#!' className='text-reset'>
                                        Angular
                                    </a>
                                </p>
                                <p>
                                    <a href='#!' className='text-reset'>
                                        React
                                    </a>
                                </p>
                                <p>
                                    <a href='#!' className='text-reset'>
                                        Vue
                                    </a>
                                </p>
                                <p>
                                    <a href='#!' className='text-reset'>
                                        Laravel
                                    </a>
                                </p>
                            </MDBCol>

                            <MDBCol md='3' lg='2' xl='2' className='mx-auto mb-4'>
                                <h4 className='text-uppercase fw-bold mb-4'>Useful links</h4>
                                <p>
                                    <a href='#!' className='text-reset'>
                                        Pricing
                                    </a>
                                </p>
                                <p>
                                    <a href='#!' className='text-reset'>
                                        Settings
                                    </a>
                                </p>
                                <p>
                                    <a href='#!' className='text-reset'>
                                        Orders
                                    </a>
                                </p>
                                <p>
                                    <a href='#!' className='text-reset'>
                                        Help
                                    </a>
                                </p>
                            </MDBCol>

                            <MDBCol md='4' lg='3' xl='3' className='mx-auto mb-md-0 mb-4'>
                                <h4 className='text-uppercase fw-bold mb-4'>Contact</h4>
                                <p>
                                    <MDBIcon color='secondary' icon='home' className='me-2' />
                                    Kuala Lumpur, Malaysia
                                </p>
                                <p>
                                    <MDBIcon color='secondary' icon='envelope' className='me-3' />
                                    services@hackashop.com
                                </p>
                                <p>
                                    <MDBIcon color='secondary' icon='phone' className='me-3' />+601 234 5678
                                </p>
                                <p>
                                    <MDBIcon color='secondary' icon='print' className='me-3' />+601 234 5679
                                </p>
                            </MDBCol>
                        </MDBRow>
                    </MDBContainer>
                </section>

                <section className='mb-4'>
                    <MDBBtn
                        floating
                        className='m-1'
                        style={{ backgroundColor: '#3b5998' }}
                        href='ameynuddin-anis.web.app'
                        role='button'
                    >
                        <MDBIcon fab icon='facebook-f' />
                    </MDBBtn>

                    <MDBBtn
                        floating
                        className='m-1'
                        style={{ backgroundColor: '#55acee' }}
                        href='#!'
                        role='button'
                    >
                        <MDBIcon fab icon='twitter' />
                    </MDBBtn>

                    <MDBBtn
                        floating
                        className='m-1'
                        style={{ backgroundColor: '#dd4b39' }}
                        href='mailto:md.ameynuddin@gmail.com'
                        role='button'
                    >
                        <MDBIcon fab icon='google' />
                    </MDBBtn>
                    <MDBBtn
                        floating
                        className='m-1'
                        style={{ backgroundColor: '#ac2bac' }}
                        href='#!'
                        role='button'
                    >
                        <MDBIcon fab icon='instagram' />
                    </MDBBtn>

                    <MDBBtn
                        floating
                        className='m-1'
                        style={{ backgroundColor: '#0082ca' }}
                        href='linkedin.com/in/ameynuddin'
                        role='button'
                    >
                        <MDBIcon fab icon='linkedin-in' />
                    </MDBBtn>

                    <MDBBtn
                        floating
                        className='m-1'
                        style={{ backgroundColor: '#333333' }}
                        href='https://github.com/Ameynuddin/hackashop'
                        role='button'
                    >
                        <MDBIcon fab icon='github' />
                    </MDBBtn>
                </section>
            </MDBContainer>

            <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
                © 2024 Copyright:
                <a className='text-white' href='https://github.com/Ameynuddin/hackashop'>
                    <span> Hackashop</span>
                </a>
            </div>
        </MDBFooter>
    );
}

export default Footer;