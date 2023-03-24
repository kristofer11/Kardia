import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import IgLogo from '../assets/instagram.svg';
import FbLogo from '../assets/facebook.svg';
import YelpLogo from '../assets/yelp.png';
import Accs from '../assets/footer/at-home.png';
import Adf from '../assets/footer/adf_logo.png';
import ClassicalDif from '../assets/footer/classical-difference.png';

//Need to add a bunch more to the footer: Address, etc, "Proud members of: ACCS, etc"
const Footer = () => {
    return (
        <footer className='site-footer mt-auto'>
            <br />
            <hr />
            <Container className='pb-3'>
                <h3 className='footer-title'>Kardia Classical School</h3>
                <Row className='address-div text-center mt-2'>
                    <Col md='6' lg='4' className='address-block'>
                        <h4>Mailing Address</h4>
                        <p>14751 N Kelsey St Ste 105<br />#243<br />Monroe, WA 98272</p>
                    </Col>
                    <Col md='6' lg='4' className='address-block'>
                        <h4>Physical Address</h4>
                        <p>5002 Bickford Ave<br />Snohomish, WA 98290</p>
                    </Col>
                    <Col md='6' lg='4' className='address-block'>
                        <h4>Hours</h4>
                        <p>Monday–Friday: 9:00AM–4:00PM<br />Saturday-Sunday – Closed</p>
                    </Col>
                </Row>
                <hr />
                <Row className='mt-4'>
                    <p style={{textAlign: 'center', color: '#A1474C', fontSize: '1.3rem'}}>Proud member of:
                    </p>
                    <div className='footer-logo-div'>
                        <img src={Accs} className='footer-logo' alt='ACCS Logo' />
                        <img src={Adf} className='footer-logo' alt='ADF Logo' />
                        <img src={ClassicalDif} className='footer-logo' alt='Classical Difference Logo' />
                    </div>

                </Row>
                <Row className='text-center mt-4 justify-content-between'>
                    <Col className='mt-4'>
                        <a className='mx-2' href='https://www.instagram.com/kardiaclassical/' target='_blank'>
                            <img src={IgLogo} alt="Instagram Logo" className='footer-social' />
                        </a>
                        <a className='mx-2' href='https://www.facebook.com/Kardia-Classical-School-104872501299533/?modal=admin_todo_tour' target='_blank'>
                            <img src={FbLogo} alt="Instagram Logo" className='footer-social' />
                        </a>
                        <a className='mx-2' href='https://www.yelp.com/biz/kardia-classical-school-snohomish' target='_blank'>
                            <img src={YelpLogo} alt="Instagram Logo" className='footer-social' />
                        </a>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}

export default Footer