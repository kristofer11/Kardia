import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import IgLogo from '../assets/instagram.svg';
import FbLogo from '../assets/facebook.svg';
import YelpLogo from '../assets/yelp.png';

const Footer = () => {
    return (
        <footer className='site-footer mt-auto'>
            <br />
            <hr />
            <Container className='pb-3'>
                <Row className='text-center mt-3 justify-content-between'>
                    <Col className='mt-4'>
                        <a className='mx-2' href='https://www.instagram.com/kardiaclassical/' target='_blank'>
                            <img src={IgLogo} alt="Instagram Logo" />
                        </a>            
                        <a className='mx-2' href='https://www.facebook.com/Kardia-Classical-School-104872501299533/?modal=admin_todo_tour' target='_blank'>
                            <img src={FbLogo} alt="Instagram Logo" />
                        </a>
                        <a className='mx-2' href='https://www.youtube.com/channel/UCVhJ3Q_sspghQcEg1dQxMag' target='_blank'>
                            <img src={YelpLogo} width='26'alt="Instagram Logo" />
                        </a>                 
                    </Col>
                </Row>        
            </Container>            
        </footer>
  )
}

export default Footer