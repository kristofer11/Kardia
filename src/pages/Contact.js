import { Card, CardImgOverlay, CardImg, } from 'reactstrap';
import ContactForm from '../components/ContactForm';
import Phone from '../assets/posters/phone.png';
import Letter from '../assets/posters/letter.jpg';
import Mailbox from '../assets/posters/mailbox.jpg';
import Hero from '../components/Hero';


// PROBABLY NEED A BETTER POSTER IMAGE. ASK LACEY FOR HER PREFERENCE
const Contact = () => {
    return (
        <div>
            <Hero
                img={Mailbox}
                alt='Mailbox'
                strength={200}
                title={
                    <>
                        <h1 className='homeOverlayText'> Contact</h1>
                        <h1 className='homeOverlayText'> Kardia</h1>
                    </>
                }
            />
            <div className='page-content contact-content'>
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

