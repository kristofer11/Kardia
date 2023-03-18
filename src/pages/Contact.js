import { Card, CardImgOverlay, CardImg, } from 'reactstrap';
import ContactForm from '../components/ContactForm';
import Phone from '../assets/posters/pawel-czerwinski--0xCCPIbl3M-unsplash.jpg';

const Contact = () => {
  return (
    <div>
          <Card className='mainHomeImgCard' style={{marginBottom: '2rem'}}>
                <CardImgOverlay className='m-sm-4  cardImgOverlay'>
                    <div className='homeCardImgOverlayDiv'>

                        <h1 className='homeOverlayText'> Contact</h1>
                        <h1 className='homeOverlayText'> Kardia</h1>
                    </div>
                </CardImgOverlay>
                <CardImg src={Phone} className='mainImg' alt='Trees' />
            </Card>
        <div className='page-content'>
        <div className='info-block'>
                    <h2>There are several ways to get a hold of us!</h2>
                    
                    <p>Email: <a href='mailto: office@kardiaclassical.org'>office@KardiaClassical.org</a>,</p>
                    <p> Phone: <a href='tel: 360-453-7334'>360-453-7334</a></p>
                    <p>You can also fill out the form below and we will get back to you ASAP.</p>
                </div>
                <ContactForm />            
        </div>        
    </div>

  )
}

export default Contact;

