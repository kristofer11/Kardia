import ContactForm from '../components/ContactForm';
import Ladder from '../assets/posters/ladder.jpg'
import Hero from '../components/Hero';

const Contact = () => {
    return (
        <div>
            <Hero
                img={Ladder}
                alt='Mailbox'
                strength={333}
                title={
                    <>
                        <h1 className='homeOverlayText'> Contact</h1>
                        <h1 className='homeOverlayText'> Kardia</h1>
                    </>
                }
            />
            <div className='page-content contact-content'>
                <div className='info-block'>
                    <h2 className='text-center' style={{color: '#152d7d'}}>We would love to hear from you!</h2>
                    <h4 className='text-center m-4'>You can reach us via phone, email or Facebook Messenger (see the link in the lower right corner).</h4>

                    <p style={{fontSize: '1.8rem'}}>Email: <a className='contact-link' href='mailto: office@kardiaclassical.org'>office@KardiaClassical.org</a></p>
                    <p  style={{fontSize: '1.8rem'}}> Phone: <a className='contact-link' href='tel: 360-453-7334'>360-453-7334</a></p>
                </div>

            </div>
        </div>

    )
}

export default Contact;

